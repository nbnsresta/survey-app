import { styled } from "../theme";
import { ComponentProps } from "react";

const Card = styled("button", {
  borderRadius: "4px",
  border: "none",
  background: "white",
  outline: 0,
  cursor: "pointer",

  "&:focus-visible": {
    outline: "2px solid -webkit-focus-ring-color",
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
