import Block from "~/components/Block";
import { Code } from "~/components/Code";

/**
 * This file will only ever get hit if a wrong locale or no locale is given.
 */
export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <p>layout.tsx (server):</p>
        <Block>
          <p>not-found.tsx (server):</p>
          <Code>404 Not Found</Code>
        </Block>
      </body>
    </html>
  );
}
