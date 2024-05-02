"use client";

import Block from "~/components/Block";
import { Code } from "~/components/Code";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <Block>
      <p>subfolder/error.tsx (client):</p>
      <Code>{error.message}</Code>
    </Block>
  );
}
