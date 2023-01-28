import { IQuestionData } from "../../interfaces/IQuestionData";
import { IQuestionField } from "../../interfaces/IQuestionField";
import Label from "../Label";
import Stack from "../Stack";
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import TextInput from "./TextInput";

interface IProps {
  question: IQuestionField;
}

const renderInput = (question: IQuestionField) => {
  switch (question.questionType) {
    case "text":
      return <TextInput {...question} />;
    case "single_select":
      return <SingleSelect {...question} />;
    case "multi_select":
      return <MultiSelect {...question} />;
  }
};

const Field = ({ question }: IProps) => {
  return (
    <Stack>
      <Label>{question.label}</Label>
      {renderInput(question)}
    </Stack>
  );
};

export default Field;
