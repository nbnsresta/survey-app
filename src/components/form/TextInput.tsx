import { IFormField } from "../../interfaces/IFormField";
import { ITextQuestionField } from "../../interfaces/IQuestionField";
import { styled } from "../../theme";
import Stack from "../Stack";

interface IProps extends ITextQuestionField, IFormField<string> {}

const BaseInput = styled("input", {
  outline: "none",
  border: "none",
  height: "2.4rem",
  padding: "0.8rem 1.6rem",
  fontSize: "1.4rem",
  color: "#213547",
  fontFamily: "inherit",
});

const InputContainer = styled(Stack, {
  borderStyle: "solid",
  borderRadius: "0.4rem",
  borderWidth: "1px",
  borderColor: "#cccccc",
  overflowX: "clip",

  "&:hover": {
    borderColor: "burlywood",
  },
  "&:focus-within": {
    borderColor: "burlywood",
  },

  "&[disabled]": {
    cursor: "not-allowed",
  },
});

const TextInput = ({ name, onChange, type, ...props }: IProps) => {
  return (
    <InputContainer
      css={{
        borderColor: "red",
      }}
    >
      <BaseInput
        name={name}
        autoComplete="off"
        onChange={(e) => onChange?.(e.target.value)}
        type={type}
        {...props}
      />
    </InputContainer>
  );
};
export default TextInput;
