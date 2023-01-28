import { useCallback, useState } from "react";
import StartPage from "./pages/StartPage";
import QuestionsPage from "./pages/QuestionsPage";
import EndPage from "./pages/EndPage";
import AppContext from "./components/AppContext";

type FormStage = "start" | "questions" | "end";

function App() {
  const [formStage, setFormStage] = useState<FormStage>("start");

  const gotoStart = useCallback(() => setFormStage("start"), []);
  const gotoQuestions = useCallback(() => setFormStage("questions"), []);
  const gotoEnd = useCallback(() => setFormStage("end"), []);

  const render = useCallback(() => {
    switch (formStage) {
      case "start":
        return <StartPage onContinue={gotoQuestions} />;

      case "questions":
        return <QuestionsPage onBack={gotoStart} onContinue={gotoEnd} />;

      case "end":
        return <EndPage />;
    }
  }, [formStage]);

  return <AppContext>{render()}</AppContext>;
}

export default App;
