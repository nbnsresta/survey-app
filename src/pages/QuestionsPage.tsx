import { useState } from "react";
import Button from "../components/Button";
import Flex from "../components/Flex";
import SectionForm from "../components/form/SectionForm";
import Stack from "../components/Stack";
import { questionSections } from "../data/questionSections";

interface IQuestionsPageProps {
  onBack: VoidFunction;
  onContinue: VoidFunction;
}

const QuestionsPage = ({ onBack, onContinue }: IQuestionsPageProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestionSection = questionSections[questionIndex];

  const gotoNextPage = () => {
    if (questionIndex >= questionSections.length - 1) onContinue();
    setQuestionIndex(questionIndex + 1);
  };

  return (
    <Stack css={{ gap: "4.8rem" }}>
      {/* progressbar */}
      <SectionForm
        key={currentQuestionSection.name}
        section={currentQuestionSection}
        defaultValues={answers}
        onSubmit={(values) => {
          setAnswers((answers) => ({ ...answers, ...values }));
          gotoNextPage();
        }}
      />
      <Flex>
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
