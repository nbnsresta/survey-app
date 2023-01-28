import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { IQuestionField } from "../../interfaces/IQuestionField";
import Stack from "../Stack";
import Field from "./Field";

interface IProps {
  name: string;
  questions: IQuestionField[];
  defaultValues: object;
  onSubmit: SubmitHandler<object>;
}

const SectionForm = ({ name, questions, defaultValues, onSubmit }: IProps) => {
  const methods = useForm({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <Stack
        as="form"
        id={name}
        css={{ rowGap: "3.2rem" }}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {questions.map((question) => {
          return <Field key={question.name} question={question} />;
        })}
      </Stack>
    </FormProvider>
  );
};

export default SectionForm;
