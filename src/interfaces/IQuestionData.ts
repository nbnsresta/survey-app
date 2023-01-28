import { IOption } from "./IOption";

export interface IBaseQuestionData {
  label: string;
  hint?: string;
}

export interface ITextQuestionData extends IBaseQuestionData {
  questionType: "text";
  type?: "email" | "url";
  placeholder?: string;
}

export interface ISingleSelectQuestionData extends IBaseQuestionData {
  questionType: "single_select";
  options: IOption[];
}

export interface IMultiSelectQuestionData extends IBaseQuestionData {
  questionType: "multi_select";
  options: IOption[];
}

export interface ICheckboxGroupQuestionData extends IBaseQuestionData {
  questionType: "checkbox_group";
  options: string[];
}

export type IQuestionData =
  | ITextQuestionData
  | ISingleSelectQuestionData
  | IMultiSelectQuestionData
  | ICheckboxGroupQuestionData;
