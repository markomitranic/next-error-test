import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Block from "~/components/Block";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function Layout({
  params,
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  if (params.locale !== "en") notFound();

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Block>
          <p>[locale]/layout.tsx (server):</p>
          <div>{children}</div>
        </Block>
      </body>
    </html>
  );
}
