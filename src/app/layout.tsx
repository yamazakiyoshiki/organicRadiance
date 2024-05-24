import type { Metadata } from "next";
import { Providers } from "./providers";
import { Image } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "organicRadiance_ECapp",
  description: "organicBeauty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Providers>
          <Image src="/logo.webp" alt="" width={100} />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
