"use client";

import Block from "~/components/Block";
import { Code } from "~/components/Code";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="en">
      <body>
        <Block>
          <p>global-error.tsx (client):</p>
          <Code>{error.message}</Code>
        </Block>
      </body>
    </html>
  );
}
