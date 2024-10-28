import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// app/routes/__root.tsx
import { createRootRoute } from "@tanstack/react-router";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { Body, Head, Html, Meta, Scripts } from "@tanstack/start";
export const Route = createRootRoute({
    meta: () => [
        {
            charSet: "utf-8",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
        {
            title: "TanStack Start Starter",
        },
    ],
    component: RootComponent,
});
function RootComponent() {
    return (_jsx(RootDocument, { children: _jsx(Outlet, {}) }));
}
function RootDocument({ children }) {
    return (_jsxs(Html, { children: [_jsx(Head, { children: _jsx(Meta, {}) }), _jsxs(Body, { children: [children, _jsx(ScrollRestoration, {}), _jsx(Scripts, {})] })] }));
}
