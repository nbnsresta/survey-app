import { IQuestionField } from "./IQuestionField";

export type ISubquestion = {
  question: IQuestionField;
  condition:
    | {
        equals: string;
      }
    | {
        in: string[];
      }
    | {
        has: string;
      };
};
