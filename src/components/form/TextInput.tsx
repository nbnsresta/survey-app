import { IFormField } from "../../interfaces/IFormField";
import { ITextQuestionField } from "../../interfaces/IQuestionField";
import { styled } from "../../theme";

interface IProps extends ITextQuestionField, IFormField<string> {}

const BaseInput = styled("input", {
  outline: "none",
  width: "80%",
  maxWidth: "72rem",
  height: "6.4rem",
  padding: "0rem 2.4rem",
  fontSize: "1.4rem",
  color: "$midnight",
  fontFamily: "inherit",
  borderStyle: "solid",
  borderWidth: "0 0 0.2rem 0",
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

const TextInput = ({ size, name, onChange, type, ...props }: IProps) => {
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
