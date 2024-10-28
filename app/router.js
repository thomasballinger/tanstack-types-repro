import { jsx as _jsx } from "react/jsx-runtime";
// app/router.tsx
import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
import { routerWithQueryClient } from "@tanstack/react-router-with-query";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { ConvexProvider } from "convex/react";
import { routeTree } from "./routeTree.gen";
export function createRouter() {
    const CONVEX_URL = import.meta.env.VITE_CONVEX_URL;
    if (!CONVEX_URL) {
        console.error("missing envar CONVEX_URL");
    }
    const convexQueryClient = new ConvexQueryClient(CONVEX_URL);
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                queryKeyHashFn: convexQueryClient.hashFn(),
                queryFn: convexQueryClient.queryFn(),
            },
        },
    });
    convexQueryClient.connect(queryClient);
    const router = routerWithQueryClient(createTanStackRouter({
        routeTree,
        context: { queryClient },
        Wrap: ({ children }) => (_jsx(ConvexProvider, { client: convexQueryClient.convexClient, children: children })),
    }), queryClient);
    return router;
}