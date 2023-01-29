import { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { ISubquestion } from "../../interfaces/ISubquestion";
import { filterSubQuestionByCondition } from "../../utils/filterSubquestionByCondition";
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
    return filterSubQuestionByCondition(primaryValue, subquestion.condition);
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
