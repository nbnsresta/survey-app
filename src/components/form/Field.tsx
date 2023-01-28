import { Controller } from "react-hook-form";
import { IQuestionField } from "../../interfaces/IQuestionField";
import Stack from "../Stack";
import MultiSelect from "./MultiSelect";
import SingleSelect from "./SingleSelect";
import TextInput from "./TextInput";

interface IProps {
  question: IQuestionField;
}

const renderInput = (question: IQuestionField) => {
  const rules = {
    required: {
      value: question.required ?? false,
      message: "Please fill all the required fields",
    },
  };

  switch (question.questionType) {
    case "text":
      return (
        <Controller
          name={question.name}
          render={({ field }) => <TextInput {...question} {...field} />}
          rules={rules}
        />
      );
    case "single_select":
      return (
        <Controller
          name={question.name}
          render={({ field }) => (
            <SingleSelect {...question} {...field} defaultValue={field.value} />
          )}
          rules={rules}
        />
      );
    case "multi_select":
      return (
        <Controller
          name={question.name}
          render={({ field }) => (
            <MultiSelect {...question} {...field} defaultValue={field.value} />
          )}
          rules={rules}
        />
      );
  }
};

const Field = ({ question }: IProps) => {
  return <Stack>{renderInput(question)}</Stack>;
};

export default Field;
