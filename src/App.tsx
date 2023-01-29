import { useCallback, useState } from "react";
import StartPage from "./pages/StartPage";
import QuestionsPage from "./pages/QuestionsPage";
import EndPage from "./pages/EndPage";
import AppContainer from "./components/AppContainer";

type FormStage = "start" | "questions" | "end";

function App() {
  const [formStage, setFormStage] = useState<FormStage>("start");

  const gotoStart = useCallback(() => setFormStage("start"), []);
  const gotoQuestions = useCallback(() => setFormStage("questions"), []);
  const onQuestionSubmission = useCallback((answers: object) => {
    console.log(answers);
    setFormStage("end");
  }, []);

  const render = useCallback(() => {
    switch (formStage) {
      case "start":
        return <StartPage onContinue={gotoQuestions} />;

      case "questions":
        return (
          <QuestionsPage onBack={gotoStart} onContinue={onQuestionSubmission} />
        );

      case "end":
        return <EndPage />;
    }
  }, [formStage]);

  return <AppContainer>{render()}</AppContainer>;
}

export default App;
