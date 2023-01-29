import { ISubquestion } from "../interfaces/ISubquestion";

export const filterSubQuestionByCondition = (
  answer: any,
  condition: ISubquestion["condition"]
) => {
  if ("equals" in condition) {
    return condition.equals === answer;
  }
  if ("in" in condition) {
    return condition.in.includes(answer);
  }
  if ("has" in condition) {
    return Array.isArray(answer) ? answer.includes(condition.has) : false;
  }
  return false;
};
