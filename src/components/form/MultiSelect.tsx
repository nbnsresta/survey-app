import { useState } from "react";
import { IFormField } from "../../interfaces/IFormField";
import { IMultiSelectQuestionField } from "../../interfaces/IQuestionField";
import { filterValidKeys } from "../../utils/object";
import { ResponsiveContainer } from "../ResponsiveContainer";
import SelectCard from "../SelectCard";

const MultiSelect = ({
  name,
  options,
  required,
  defaultValue,
  onChange,
  ...props
}: IMultiSelectQuestionField & IFormField<string[]>) => {
  const [checkedRecord, setCheckedRecord] = useState<Record<string, boolean>>(
    () => {
      return (
        defaultValue?.reduce((acc, key) => ({ ...acc, [key]: true }), {}) ?? {}
      );
    }
  );

  const handleClick = (name: string) => () => {
    const nextRecord = {
      ...checkedRecord,
      [name]: !checkedRecord[name],
    };
    setCheckedRecord(nextRecord);
    onChange?.(filterValidKeys(nextRecord));
  };

  return (
    <ResponsiveContainer {...props}>
      {options.map((option) => (
        <SelectCard
          key={option.value}
          tabIndex={0}
          type="button"
          selected={checkedRecord[option.value]}
          onClick={handleClick(option.value)}
        >
          {option.label}
        </SelectCard>
      ))}
    </ResponsiveContainer>
  );
};

export default MultiSelect;
