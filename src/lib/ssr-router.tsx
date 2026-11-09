import { BrowserRouter as RRBrowserRouter } from "react-router-dom";
import type { ComponentProps, ComponentType, ReactNode } from "react";

// During the build-time prerender, entry-server sets a StaticRouter here.
// In the browser it is unset, so this is the normal BrowserRouter.
export const BrowserRouter = (props: ComponentProps<typeof RRBrowserRouter>) => {
  const SSR = (globalThis as { __SSR_ROUTER__?: ComponentType<{ children: ReactNode }> }).__SSR_ROUTER__;
  return SSR ? <SSR>{props.children}</SSR> : <RRBrowserRouter {...props} />;
};
