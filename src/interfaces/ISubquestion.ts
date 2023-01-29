import { IQuestionField } from "./IQuestionField";

export type EqualsCondition = {
  equals: string;
};

export type InCondition = {
  in: string[];
};

export type HasCondition = {
  has: string;
};

export type ISubquestion = {
  question: IQuestionField;
  condition: EqualsCondition | InCondition | HasCondition;
};
