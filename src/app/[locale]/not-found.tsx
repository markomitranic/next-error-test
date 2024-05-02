"use client";

import Block from "~/components/Block";
import { Code } from "~/components/Code";

/**
 * We don't expect this file to ever get hit
 * because each subfolder should handle it's own errors in its own layouts.
 */
export default function NotFound() {
  return (
    <Block>
      <p>not-found.tsx (server):</p>
      <Code>404 Not Found</Code>
    </Block>
  );
}
