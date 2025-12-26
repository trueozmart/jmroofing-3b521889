import { useEffect, useMemo, useRef, useState } from "react";
import { X, MessageCircle } from "lucide-react";

const MOBILE_QUERY = "(max-width: 768px)";

function isLikelyQuelpChatWindow(el: Element) {
  if (!(el instanceof HTMLElement)) return false;

  const tag = el.tagName.toLowerCase();
  if (tag !== "iframe" && tag !== "div") return false;

  const cs = window.getComputedStyle(el);
  if (cs.position !== "fixed") return false;

  const rect = el.getBoundingClientRect();
  if (rect.width < 160 || rect.height < 160) return false; // exclude launcher buttons

  // Prefer Quelp-related iframes, but also catch generic full-screen fixed chat iframes
  if (tag === "iframe") {
    const iframe = el as HTMLIFrameElement;
    const src = iframe.src || "";
    if (src.includes("quelp") || src.includes("sitechat") || src.includes("onrender")) return true;
  }

  const styleAttr = el.getAttribute("style") || "";
  if (styleAttr.includes("z-index") || styleAttr.includes("inset") || styleAttr.includes("bottom")) return true;

  // As a fallback, treat large fixed elements as a chat window
  return rect.height >= window.innerHeight * 0.4 || rect.width >= window.innerWidth * 0.7;
}

function applyMobileCornerSizing(el: HTMLElement) {
  // Force corner widget sizing/position even if inline styles set full-screen
  el.style.setProperty("top", "auto", "important");
  el.style.setProperty("left", "auto", "important");
  el.style.setProperty("right", "12px", "important");
  el.style.setProperty("bottom", "70px", "important");

  el.style.setProperty("width", "90vw", "important");
  el.style.setProperty("max-width", "400px", "important");

  el.style.setProperty("height", "50vh", "important");
  el.style.setProperty("max-height", "50vh", "important");

  el.style.setProperty("border-radius", "16px", "important");
  el.style.setProperty("overflow", "hidden", "important");
}

function hideEl(el: HTMLElement) {
  el.style.setProperty("visibility", "hidden", "important");
  el.style.setProperty("opacity", "0", "important");
  el.style.setProperty("pointer-events", "none", "important");
}

function showEl(el: HTMLElement) {
  el.style.removeProperty("visibility");
  el.style.removeProperty("opacity");
  el.style.removeProperty("pointer-events");
}

export default function QuelpAIMobileControls() {
  const collapsedRef = useRef<HTMLElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [hasCollapsed, setHasCollapsed] = useState(false);

  const mq = useMemo(() => {
    if (typeof window === "undefined") return null;
    return window.matchMedia(MOBILE_QUERY);
  }, []);

  useEffect(() => {
    if (!mq) return;

    const onChange = () => setIsMobile(mq.matches);
    onChange();

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mq]);

  useEffect(() => {
    if (!isMobile) {
      setIsChatVisible(false);
      return;
    }

    let raf = 0;

    const scan = () => {
      raf = 0;

      const all = Array.from(document.querySelectorAll("iframe, div"));
      const windows = all
        .filter(isLikelyQuelpChatWindow)
        .map((n) => n as HTMLElement)
        .filter((el) => {
          const cs = window.getComputedStyle(el);
          return cs.display !== "none";
        });

      // Apply sizing to anything that looks like the chat window
      for (const el of windows) applyMobileCornerSizing(el);

      // Visible if at least one is not hidden by our close button
      const visible = windows.some((el) => window.getComputedStyle(el).visibility !== "hidden");
      setIsChatVisible(visible);
    };

    const scheduleScan = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(scan);
    };

    // Initial scan
    scheduleScan();

    const obs = new MutationObserver(scheduleScan);
    obs.observe(document.body, { childList: true, subtree: true, attributes: true });

    window.addEventListener("resize", scheduleScan);
    window.addEventListener("orientationchange", scheduleScan);

    const interval = window.setInterval(scheduleScan, 800);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      obs.disconnect();
      window.removeEventListener("resize", scheduleScan);
      window.removeEventListener("orientationchange", scheduleScan);
      window.clearInterval(interval);
    };
  }, [isMobile]);

  const handleClose = () => {
    if (!isMobile) return;

    const all = Array.from(document.querySelectorAll("iframe, div"));
    const windows = all
      .filter(isLikelyQuelpChatWindow)
      .map((n) => n as HTMLElement);

    // Hide only the large chat window(s), not the launcher
    collapsedRef.current = windows;
    windows.forEach((el) => hideEl(el));

    setHasCollapsed(true);
    setIsChatVisible(false);
  };

  const handleReopen = () => {
    collapsedRef.current.forEach((el) => {
      showEl(el);
      applyMobileCornerSizing(el);
    });

    setHasCollapsed(false);
    setIsChatVisible(true);
  };

  if (!isMobile) return null;

  return (
    <>
      {/* Top-right close (inside viewport) */}
      {isChatVisible && (
        <button
          onClick={handleClose}
          className="fixed right-4 top-20 z-[2147483647] flex h-11 w-11 items-center justify-center rounded-full bg-destructive text-destructive-foreground shadow-xl"
          style={{ zIndex: 2147483647 }}
          aria-label="Close chat"
        >
          <X size={18} />
        </button>
      )}

      {/* Bottom close pill (always reachable above sticky bars) */}
      {isChatVisible && (
        <button
          onClick={handleClose}
          className="fixed left-1/2 z-[2147483647] -translate-x-1/2 rounded-full bg-destructive px-5 py-3 text-sm font-semibold text-destructive-foreground shadow-xl"
          style={{ bottom: "calc(92px + env(safe-area-inset-bottom, 0px))", zIndex: 2147483647 }}
          aria-label="Close chat"
        >
          Close chat
        </button>
      )}

      {/* Reopen button (in case the vendor launcher is hidden) */}
      {!isChatVisible && hasCollapsed && (
        <button
          onClick={handleReopen}
          className="fixed right-4 z-[2147483647] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl"
          style={{ bottom: "calc(92px + env(safe-area-inset-bottom, 0px))", zIndex: 2147483647 }}
          aria-label="Open chat"
        >
          <MessageCircle size={22} />
        </button>
      )}
    </>
  );
}
