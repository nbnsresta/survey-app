import { choices } from "../data/choices";
import { questionSections } from "../data/questionSections";
import { IQuestionField } from "../interfaces/IQuestionField";
import { filterSubQuestionByCondition } from "./filterSubquestionByCondition";

const mappedValue = (primaryQuestion: IQuestionField, primaryAnswer: any) => {
  switch (primaryQuestion.questionType) {
    case "text":
      return primaryAnswer;
    case "single_select":
      return choices[primaryAnswer].label;
    case "multi_select":
      return Array.isArray(primaryAnswer)
        ? primaryAnswer.map((answer) => choices[answer].label)
        : [];
    case "checkbox_group":
      return primaryAnswer;
  }
};

interface IAnswerPayload {
  name: string;
  question: string;
  answer: string | string[];
  value: string | string;
}

export const parseAnswers = (answers: Record<string, any>) => {
  return questionSections.reduce<IAnswerPayload[]>((allMap, section) => {
    const primaryQuestion =
      "question" in section
        ? section.question
        : section.if.condition.value ===
          answers[section.if.condition.questionId]
        ? section.if.question
        : section.else.question;

    if (!primaryQuestion) return allMap;

    let draftPayload = [...allMap];
    const primaryAnswer = answers[primaryQuestion.name];

    draftPayload.push({
      name: primaryQuestion.name,
      question: primaryQuestion.label,
      answer: primaryAnswer,
      value: mappedValue(primaryQuestion, primaryAnswer),
    });

    if (!section.subquestions || section.subquestions.length <= 0)
      return draftPayload;

    section.subquestions.forEach((subquestion) => {
      const isSubquestionValid = filterSubQuestionByCondition(
        primaryAnswer,
        subquestion.condition
      );

      if (!isSubquestionValid) return;

      draftPayload.push({
        name: subquestion.question.name,
        question: subquestion.question.label,
        answer: answers[subquestion.question.name],
        value: mappedValue(
          subquestion.question,
          answers[subquestion.question.name]
        ),
      });
    });
    return draftPayload;
  }, []);
};
