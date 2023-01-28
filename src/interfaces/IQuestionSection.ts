import { IQuestionField } from "./IQuestionField";
import { ISubquestion } from "./ISubquestion";

export interface IQuestionSectionCondition {
  questionId: string;
  value: string;
}

export type IQuestionSection = {
  name: `section_${string}`;
  subquestions?: ISubquestion[];
} & (
  | {
      if: {
        condition: IQuestionSectionCondition;
        question: IQuestionField;
      };
      else: {
        question: IQuestionField;
      };
    }
  | { question: IQuestionField }
);
