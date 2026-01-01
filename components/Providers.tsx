"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, useMemo } from "react";

function Providers({ children }: { children: ReactNode }) {
  const convex = useMemo(() => {
    // Initialize the Convex client on the client only.
    // `NEXT_PUBLIC_CONVEX_URL` is available at build-time and injected into the client.
    return new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  }, []);

  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}

export default Providers;
