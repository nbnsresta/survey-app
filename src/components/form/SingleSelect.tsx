import { useState } from "react";
import { IFormField } from "../../interfaces/IFormField";
import { ISingleSelectQuestionField } from "../../interfaces/IQuestionField";
import { ResponsiveContainer } from "../ResponsiveContainer";
import SelectCard from "../SelectCard";

const SingleSelect = ({
  name,
  required,
  defaultValue,
  onChange,
  options,
  ...props
}: ISingleSelectQuestionField & IFormField<string>) => {
  const [value, setValue] = useState(defaultValue);

  const handleClick = (value: string) => () => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <ResponsiveContainer {...props}>
      {options.map((option) => (
        <SelectCard
          key={option.value}
          type="button"
          selected={option.value === value}
          onClick={handleClick(option.value)}
        >
          {option.label}
        </SelectCard>
      ))}
    </ResponsiveContainer>
  );
};

export default SingleSelect;
