import type { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

// Build-time only: renders a route to HTML so crawlers get the full page without running JS.
export function render(url: string): string {
  (globalThis as { __SSR_ROUTER__?: unknown }).__SSR_ROUTER__ = ({ children }: { children: ReactNode }) => (
    <StaticRouter location={url}>{children}</StaticRouter>
  );
  return renderToString(<App />);
}
