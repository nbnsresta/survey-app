import { IFormField } from "../../interfaces/IFormField";
import { ITextQuestionField } from "../../interfaces/IQuestionField";
import { styled } from "../../theme";

interface IProps extends ITextQuestionField, IFormField<string> {}

const BaseInput = styled("input", {
  outline: "none",
  borderStyle: "solid",
  width: "32rem",
  height: "2.4rem",
  padding: "0.8rem 1.6rem",
  fontSize: "1.4rem",
  color: "$midnight",
  fontFamily: "inherit",
  borderRadius: "0.4rem",
  borderWidth: "2px",
  borderColor: "#cccccc",
  overflowX: "clip",

  "&:hover": {
    borderColor: "$primary",
  },
  "&:focus": {
    borderColor: "$primary",
  },
  "&[disabled]": {
    cursor: "not-allowed",
  },
});

const TextInput = ({ name, onChange, type, ...props }: IProps) => {
  return (
    <BaseInput
      name={name}
      autoComplete="off"
      onChange={(e) => onChange?.(e.target.value)}
      type={type}
      {...props}
    />
  );
};
export default TextInput;
