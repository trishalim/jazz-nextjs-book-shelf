"use client";

import { createJazzReactApp, useDemoAuth, DemoAuthBasicUI } from "jazz-react";
import { Nav } from "@/components/Nav";

const Jazz = createJazzReactApp();

export const { useAccount, useCoState } = Jazz;

export function JazzAndAuth({ children }: { children: React.ReactNode }) {
  const [auth, authState] = useDemoAuth();
  return (
    <>
      <Jazz.Provider
        auth={auth}
        // replace `you@example.com` with your email as a temporary API key
        peer="wss://mesh.jazz.tools/?key=you@example.com"
      >
        <Nav />
        {children}
      </Jazz.Provider>
      <DemoAuthBasicUI appName="Jazz Book Shelf" state={authState} />
    </>
  );
}
