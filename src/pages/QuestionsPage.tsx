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
  const currentQuestionSection = questionSections[questionIndex];
  return (
    <Stack>
      {/* progressbar */}
      <SectionForm
        key={currentQuestionSection.name}
        name={currentQuestionSection.name}
        questions={currentQuestionSection.questions}
        defaultValues={{}}
        onSubmit={() => {}}
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
          form=""
          type="submit"
          onClick={() => {
            if (questionIndex >= questionSections.length - 1) onContinue();
            setQuestionIndex(questionIndex + 1);
          }}
        >
          Continue
        </Button>
      </Flex>
    </Stack>
  );
};

export default QuestionsPage;
