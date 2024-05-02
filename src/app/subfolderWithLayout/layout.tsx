import "~/styles/globals.css";

import Block from "~/components/Block";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Block>
      <p>subfolderWithLayout/layout.tsx (server):</p>
      <div>{children}</div>
    </Block>
  );
}
