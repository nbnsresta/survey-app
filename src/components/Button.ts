import { styled } from "../theme";

const Button = styled("button", {
  border: "none",
  outline: "none",
  borderRadius: "10rem",
  cursor: "pointer",
  fontWeight: 500,
  transitionProperty: "background-color, color, border",
  transitionDuration: "320ms",
  transitionTimingFunction: "ease-in-out",

  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "$primary",
        "&:hover": {
          backgroundColor: "$midnight",
        },
      },
      secondary: {
        color: "$primary",
        border: "1px solid $primary",
        backgroundColor: "transparent",
        "&:hover": {
          border: "1px solid $midnight",
          color: "$midnight",
        },
      },
    },
    size: {
      lg: {
        fontSize: "$md",
        padding: "1.8rem 8rem",
      },
      sm: {
        fontSize: "$sm",
        padding: "0.9rem 2.4rem",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export default Button;
