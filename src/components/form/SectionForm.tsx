import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { IQuestionSection } from "../../interfaces/IQuestionSection";
import Heading2 from "../Heading2";
import Stack from "../Stack";
import Subtext from "../Subtext";
import Field from "./Field";

interface IProps {
  section: IQuestionSection;
  defaultValues: Record<string, any>;
  onSubmit: SubmitHandler<object>;
}

const SectionForm = ({ section, defaultValues, onSubmit }: IProps) => {
  const methods = useForm({
    shouldUnregister: true,
    defaultValues,
  });

  const primaryQuestion =
    "question" in section
      ? section.question
      : section.if.condition.value ===
        defaultValues[section.if.condition.questionId]
      ? section.if.question
      : section.else.question;

  return (
    <FormProvider {...methods}>
      <Stack
        as="form"
        id={section.name}
        css={{ rowGap: "4.8rem", alignItems: "center" }}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Stack
          css={{ rowGap: "2.4rem", alignItems: "center", maxWidth: "72rem" }}
        >
          <Heading2>{primaryQuestion.label}</Heading2>
          {primaryQuestion.hint && <Subtext>{primaryQuestion.hint}</Subtext>}
        </Stack>
        <Field question={primaryQuestion} />
      </Stack>
    </FormProvider>
  );
};

export default SectionForm;
