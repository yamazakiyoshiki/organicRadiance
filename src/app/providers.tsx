"use client";

import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
