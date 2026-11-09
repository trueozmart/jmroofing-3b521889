// Build-time prerender: writes each route's full HTML into dist so crawlers
// see the content without running JavaScript. Never fails the build: if
// anything goes wrong the site deploys exactly as before.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrOut = path.join(root, "dist-ssr");

function routesFromApp() {
  const src = fs.readFileSync(path.join(root, "src", "App.tsx"), "utf8");
  const paths = [...src.matchAll(/path=["']([^"']+)["']/g)].map((m) => m[1]);
  return [...new Set(["/", ...paths.filter((p) => p.startsWith("/") && !p.includes(":") && !p.includes("*"))])];
}

// Browser-only globals some libraries touch at import time.
const memStore = () => { const m = new Map(); return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k), clear: () => m.clear(), key: (i) => [...m.keys()][i] ?? null, get length() { return m.size; } }; };
if (typeof globalThis.localStorage === "undefined") globalThis.localStorage = memStore();
if (typeof globalThis.sessionStorage === "undefined") globalThis.sessionStorage = memStore();

function applyHead(html, r) {
  if (!r || typeof r === "string") return html;
  const attrs = (tag) => tag.replace(/ data-rh="true"/g, "");
  if (r.title && /<title[^>]*>[^<]+<\/title>/.test(r.title)) html = html.replace(/<title>[\s\S]*?<\/title>/, attrs(r.title));
  const metas = r.meta ? r.meta.match(/<meta[^>]*>/g) || [] : [];
  const links = r.link ? r.link.match(/<link[^>]*>/g) || [] : [];
  for (const tag of [...metas, ...links]) {
    const key = tag.match(/(name|property|rel)="([^"]+)"/);
    if (!key) continue;
    const re = new RegExp(`<(meta|link)\\s+[^>]*${key[1]}="${key[2].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>\\s*`, "g");
    html = html.replace(re, "");
  }
  const extra = [...metas, ...links].map(attrs).join("") + (r.script ? attrs(r.script) : "");
  return extra ? html.replace("</head>", `${extra}</head>`) : html;
}

try {
  const { build } = await import("vite");
  await build({
    root,
    logLevel: "warn",
    ssr: { noExternal: ["react-helmet-async"] },
    build: { ssr: "src/entry-server.tsx", outDir: "dist-ssr", emptyOutDir: true },
  });
  const { render } = await import(pathToFileURL(path.join(ssrOut, "entry-server.js")).href);
  const baseHtml = fs.readFileSync(path.join(dist, "index.html"), "utf8");
  const canon = baseHtml.match(/<link\s+rel="canonical"\s+href="([^"]*)"/);
  const origin = canon ? new URL(canon[1]).origin : null;
  let done = 0;
  for (const route of routesFromApp()) {
    try {
      const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.slice(1), "index.html");
      let html = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : baseHtml;
      if (route !== "/" && !fs.existsSync(file) && origin) {
        // A new per-route file: point its canonical and og:url at the route itself.
        html = html
          .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${origin}${route}$2`)
          .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${origin}${route}$2`);
      }
      if (!html.includes('<div id="root"></div>')) continue;
      const out = render(route);
      const app = typeof out === "string" ? out : out.html;
      html = applyHead(html, out);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
      done++;
    } catch (e) {
      console.warn(`[prerender] skipped ${route}: ${e && e.message}`);
    }
  }
  console.log(`[prerender] wrote ${done} route(s)`);
} catch (e) {
  console.warn(`[prerender] skipped: ${e && e.message}`);
} finally {
  fs.rmSync(ssrOut, { recursive: true, force: true });
}
