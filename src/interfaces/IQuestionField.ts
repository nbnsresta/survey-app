import {
  ICheckboxGroupQuestionData,
  IMultiSelectQuestionData,
  ISingleSelectQuestionData,
  ITextQuestionData,
} from "./IQuestionData";

export type IBaseQuestionField = {
  name: string;
  required?: boolean;
  size?: "sm" | "md";
};

export type ITextQuestionField = IBaseQuestionField & ITextQuestionData;

export type ISingleSelectQuestionField = IBaseQuestionField &
  ISingleSelectQuestionData;

export type IMultiSelectQuestionField = IBaseQuestionField &
  IMultiSelectQuestionData;

export type ICheckboxGroupQuestionField = IBaseQuestionField &
  ICheckboxGroupQuestionData;

export type IQuestionField =
  | ITextQuestionField
  | ISingleSelectQuestionField
  | IMultiSelectQuestionField
  | ICheckboxGroupQuestionField;
