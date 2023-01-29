import { styled } from "../theme";
import { ComponentProps } from "react";

const Card = styled("button", {
  borderRadius: "0.4rem",
  border: "none",
  fontFamily: "Poppins",
  background: "white",
  outline: 0,
  cursor: "pointer",

  "&:focus-visible": {
    outline: "0.2rem solid -webkit-focus-ring-color",
  },
});

interface IProps extends ComponentProps<typeof Card> {
  selected: boolean;
}

const SelectCard = ({ selected, ...props }: IProps) => {
  return (
    <Card
      css={selected ? { outline: "0.2rem solid $primary" } : {}}
      {...props}
    />
  );
};

export default SelectCard;
