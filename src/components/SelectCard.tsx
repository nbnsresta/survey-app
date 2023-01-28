import { styled } from "../theme";
import { ComponentProps } from "react";

const Card = styled("button", {
  display: "flex",
  padding: "2.4rem 2.8rem",
  fontWeight: 600,
  // font-size: 3.2rem,
  lineHeight: "4rem",
  color: "$midnight",
  borderRadius: "4px",
  border: "none",
  background: "white",
  outline: "0",
  transform: "none",
  transition: "transform 100ms linear",
  cursor: "pointer",
  width: "32rem",
  height: "12rem",
  alignItems: "center",
  // "&:hover": {
  //   transform: "scale(1.08)",
  // },
  "&:focus-visible": {
    //   transform: "scale(1.08)",
    outline: "2px solid -webkit-focus-ring-color",
  },

  variants: {
    size: {
      sm: {
        fontSize: "2.4rem",
      },
      md: {
        fontSize: "3.2rem",
      },
      lg: {
        fontSize: "5.4rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IProps extends ComponentProps<typeof Card> {
  selected: boolean;
}

const SelectCard = ({ selected, ...props }: IProps) => {
  return (
    <Card css={selected ? { outline: "2px solid $primary" } : {}} {...props} />
  );
};

export default SelectCard;
