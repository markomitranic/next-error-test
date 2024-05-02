import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Block from "~/components/Block";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Block>
          <p>layout.tsx (server):</p>
          <div>{children}</div>
        </Block>
      </body>
    </html>
  );
}
