import { useState } from "react";
import Button from "../components/Button";
import Flex from "../components/Flex";
import SectionForm from "../components/form/SectionForm";
import Progressbar from "../components/Progressbar";
import Stack from "../components/Stack";
import { questionSections } from "../data/questionSections";
import { styled } from "../theme";
import { parseAnswers } from "../utils/parseAnswers";

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
          if (questionIndex >= questionSections.length - 1) {
            return onContinue(summedAnswers);
          }

          // scroll to top;
          gotoNextPage();
        }}
      />
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
            if (questionIndex <= 0) onBack();
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
    </Stack>
  );
};

export default QuestionsPage;
