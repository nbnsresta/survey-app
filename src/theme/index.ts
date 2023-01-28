import { createStitches } from "@stitches/react";

export const { createTheme, styled } = createStitches({
  theme: {
    colors: {
      primary: "#5D97FF",
      midnight: "#161E35",
    },
    fontSizes: {
      xxl: "5.4rem",
      xl: "4.2rem",
      lg: "3.2rem",
      md: "1.8rem",
      sm: "1.2rem",
    },
  },
});
