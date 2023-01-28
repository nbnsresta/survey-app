import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { ISubquestion } from "../../interfaces/ISubquestion";
import Field from "./Field";

const Subquestion = ({
  primaryQuestionName,
  subquestions,
}: {
  primaryQuestionName: string;
  subquestions: ISubquestion[];
}) => {
  const { watch } = useFormContext();
  if (subquestions.length < 1) return <Fragment />;

  const validateSubquestionCondition = (subquestion: ISubquestion): boolean => {
    const primaryValue = watch(primaryQuestionName);
    if ("equals" in subquestion.condition) {
      return subquestion.condition.equals === primaryValue;
    }
    if ("in" in subquestion.condition) {
      return subquestion.condition.in.includes(primaryValue);
    }
    if ("has" in subquestion.condition) {
      return Array.isArray(primaryValue)
        ? primaryValue.includes(subquestion.condition.has)
        : false;
    }
    return false;
  };

  return (
    <Fragment>
      {subquestions.filter(validateSubquestionCondition).map((subquestion) => (
        <Field
          key={subquestion.question.name}
          question={subquestion.question}
        />
      ))}
    </Fragment>
  );
};

export default Subquestion;
