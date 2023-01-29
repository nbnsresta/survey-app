import { useState } from "react";
import { IFormField } from "../../interfaces/IFormField";
import { ICheckboxGroupQuestionField } from "../../interfaces/IQuestionField";
import { styled } from "../../theme";
import { filterValidKeys } from "../../utils/object";
import Box from "../Box";
import Flex from "../Flex";

const Grid = styled(Box, {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 40rem)",
  textAlign: "start",
  maxWidth: "100%",
  gap: "2.4rem 4.8rem",
});

const Checkbox = styled("span", {
  height: "1.6rem",
  minWidth: "1.6rem",
  transition: "background-color 300ms ease-in-out",
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
            lineHeight: "2.4rem",
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
              marginTop: "0.4rem",
              backgroundColor: checkedRecord[option] ? "$primary" : "white",
              border: "0.1rem solid $primary",
            }}
          />
          <span>{option}</span>
        </Flex>
      ))}
    </Grid>
  );
};

export default CheckboxGroup;
