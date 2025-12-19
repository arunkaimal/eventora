"use client";

import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react";
import { useAuth } from "@clerk/nextjs";

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL
);

export function ConvexClientProvider({ children }) {
  const { getToken } = useAuth();

  return (
    <ConvexProvider client={convex} useAuth={{ getToken }}>
      {children}
    </ConvexProvider>
  );
}
