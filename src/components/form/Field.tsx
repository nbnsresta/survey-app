import { Fragment } from "react";
import { Controller } from "react-hook-form";
import { IQuestionField } from "../../interfaces/IQuestionField";
import CheckboxGroup from "./CheckboxGroup";
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
    case "checkbox_group":
      return (
        <Controller
          name={question.name}
          render={({ field }) => (
            <CheckboxGroup
              {...question}
              {...field}
              defaultValue={field.value}
            />
          )}
          rules={rules}
        />
      );
  }
};

const Field = ({ question }: IProps) => {
  return <Fragment>{renderInput(question)}</Fragment>;
};

export default Field;
