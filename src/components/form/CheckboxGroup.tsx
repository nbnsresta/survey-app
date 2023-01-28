import { useState } from "react";
import { IFormField } from "../../interfaces/IFormField";
import { ICheckboxGroupQuestionField } from "../../interfaces/IQuestionField";
import { styled } from "../../theme";
import { filterValidKeys } from "../../utils/object";
import Box from "../Box";
import Flex from "../Flex";

const Grid = styled(Box, {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  textAlign: "start",
  maxWidth: "72rem",
  gap: "2.4rem 4.8rem",
});

const Checkbox = styled("span", {
  height: "1.6rem",
  minWidth: "1.6rem",
});

const CheckboxGroup = ({
  options,
  defaultValue,
  onChange,
}: ICheckboxGroupQuestionField & IFormField<string[]>) => {
  const [checkedRecord, setCheckedRecord] = useState<Record<string, boolean>>(
    () => {
      return (
        defaultValue?.reduce((acc, key) => ({ ...acc, [key]: true }), {}) ?? {}
      );
    }
  );

  return (
    <Grid>
      {options.map((option) => (
        <Flex
          as="label"
          css={{
            fontSize: "1.6rem",
            fontFamily: "Roboto",
            alignItems: "start",
            gap: "2.4rem",
            fontWeight: 400,
            lineHeight: "24px",
          }}
        >
          <input
            hidden
            type="checkbox"
            name={option}
            onChange={(e) => {
              const nextRecord = {
                ...checkedRecord,
                [option]: e.target.checked,
              };
              setCheckedRecord(nextRecord);
              onChange?.(filterValidKeys(nextRecord));
            }}
            defaultChecked={checkedRecord[option]}
          />
          <Checkbox
            css={{
              backgroundColor: checkedRecord[option] ? "$primary" : "white",
              border: "1px solid $primary",
            }}
          />
          <span>{option}</span>
        </Flex>
      ))}
    </Grid>
  );
};

export default CheckboxGroup;
