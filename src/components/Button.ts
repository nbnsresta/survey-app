import { styled } from "../theme";

const Button = styled("button", {
  border: "none",
  outline: "none",
  borderRadius: "10rem",
  cursor: "pointer",
  fontWeight: 500,

  variants: {
    variant: {
      primary: {
        color: "white",
        backgroundColor: "$primary",
        "&:hover": {
          backgroundColor: "#4886f4",
        },
      },
      secondary: {
        color: "$primary",
        outline: "1px solid $primary",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$primary",
          color: "white",
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
