import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { IQuestionSection } from "../../data/questionSections";
import { styled } from "../../theme";
import Stack from "../Stack";
import Subtext from "../Subtext";
import Field from "./Field";

interface IProps {
  section: IQuestionSection;
  defaultValues: Record<string, any>;
  onSubmit: SubmitHandler<object>;
}

const QuestionHeading = styled("h2", {
  fontWeight: 600,
  margin: 0,
  fontSize: "$lg",
  lineHeight: "6.4rem",
  textAlign: "center",
  color: "$midnight",
});

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
          <QuestionHeading>{primaryQuestion.label}</QuestionHeading>
          {primaryQuestion.hint && <Subtext>{primaryQuestion.hint}</Subtext>}
        </Stack>
        <Field question={primaryQuestion} />
      </Stack>
    </FormProvider>
  );
};

export default SectionForm;
