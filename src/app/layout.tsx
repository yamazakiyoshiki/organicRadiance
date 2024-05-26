import type { Metadata } from "next";
import { Providers } from "./providers";
import { Box, Image } from "@chakra-ui/react";
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
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar />
            <Box flex="1">
              <Image
                src="/logo.png"
                alt=""
                sx={{
                  width: "80px",
                  position: "fixed",
                  top: "0px",
                  left: "10px",
                }}
              />
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
