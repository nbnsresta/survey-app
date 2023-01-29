import { useState } from "react";
import Button from "../components/Button";
import Flex from "../components/Flex";
import SectionForm from "../components/form/SectionForm";
import Progressbar from "../components/Progressbar";
import Stack from "../components/Stack";
import { questionSections } from "../data/questionSections";
import { styled } from "../theme";
import { scrollToTop } from "../utils/scrollToTop";

interface IQuestionsPageProps {
  onBack: VoidFunction;
  onContinue: (answers: object) => void;
}

const QuestionCount = styled("p", {
  fontFamily: "Roboto",
  fontWeight: 500,
  lineHeight: "2.4rem",
  textAlign: "center",
  color: "$primary",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
});

const QuestionsPage = ({ onBack, onContinue }: IQuestionsPageProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestionSection = questionSections[questionIndex];

  const gotoNextPage = () => {
    scrollToTop();
    setQuestionIndex(questionIndex + 1);
  };

  const progress = ((questionIndex + 1) / questionSections.length) * 100;

  return (
    <Stack css={{ gap: "4.8rem", alignItems: "center" }}>
      <Progressbar progress={progress} />
      <QuestionCount>{`QUESTION ${questionIndex + 1} / ${
        questionSections.length
      }`}</QuestionCount>
      <SectionForm
        key={currentQuestionSection.name}
        section={currentQuestionSection}
        defaultValues={answers}
        onSubmit={(values) => {
          const summedAnswers = { ...answers, ...values };
          setAnswers(summedAnswers);
          scrollToTop();

          if (questionIndex >= questionSections.length - 1) {
            return onContinue(summedAnswers);
          }
          gotoNextPage();
        }}
      />
      {questionIndex < questionSections.length - 1 ? (
        <Flex
          css={{
            justifyContent: "space-between",
            maxWidth: "72rem",
            width: "100%",
          }}
        >
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              scrollToTop();
              if (questionIndex <= 0) {
                return onBack();
              }
              setQuestionIndex(questionIndex - 1);
            }}
          >
            Back
          </Button>
          <Button
            key={currentQuestionSection.name}
            form={currentQuestionSection.name}
          >
            Continue
          </Button>
        </Flex>
      ) : (
        <Button
          size="lg"
          key={currentQuestionSection.name}
          form={currentQuestionSection.name}
        >
          Submit Survey
        </Button>
      )}
    </Stack>
  );
};

export default QuestionsPage;
