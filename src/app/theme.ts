import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e9f5f2",
      100: "#c8e3da",
      200: "#a3d1c1",
      300: "#7dbfa9",
      400: "#55ad90",
      500: "#3b9377",
      600: "#2d735d",
      700: "#1e5244",
      800: "#0e312b",
      900: "#001212",
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#e5e0cf",
        color: "gray.800",
      },
    },
  },
});

export default theme;
