import type { Metadata } from "next";
import { Providers } from "./providers";
import { Image } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
          <Image
            src="/logo.png"
            alt=""
            sx={{
              width: "90px",
              position: "fixed",
            }}
          />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
