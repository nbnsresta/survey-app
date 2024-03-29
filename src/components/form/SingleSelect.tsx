import { useState } from "react";
import { IFormField } from "../../interfaces/IFormField";
import { ISingleSelectQuestionField } from "../../interfaces/IQuestionField";
import CardContent from "../CardContent";
import { ResponsiveContainer } from "../ResponsiveContainer";
import SelectCard from "../SelectCard";

const SingleSelect = ({
  defaultValue,
  onChange,
  options,
  size,
}: ISingleSelectQuestionField & IFormField<string>) => {
  const [value, setValue] = useState(defaultValue);

  const handleClick = (value: string) => () => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <ResponsiveContainer>
      {options.map((option) => (
        <SelectCard
          key={option.value}
          type="button"
          selected={option.value === value}
          onClick={handleClick(option.value)}
        >
          <CardContent content={option} size={size} />
        </SelectCard>
      ))}
    </ResponsiveContainer>
  );
};

export default SingleSelect;
