import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithAuthKit } from "./ConvexProviderWithAuthKit";
import { useAuth } from "@workos-inc/authkit-react";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

export function ConvexClientWithAuth({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProviderWithAuthKit client={convex} useAuth={useAuth}>
      {children}
    </ConvexProviderWithAuthKit>
  );
}