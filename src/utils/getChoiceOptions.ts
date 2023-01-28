import { IOption } from "../interfaces/IOption";

export const getChoiceOptions = (choices: Record<string, IOption>) => {
  Object.entries(choices).map(([key, choice]) => ({
    ...choice,
    value: key,
  }));
};
