import React from "react";
import { CheckBoxType } from "./consts";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CustomCheckbox } from "./styles";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

export type CheckBoxProps = {
  type?: CheckBoxType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  type = CheckBoxType.NOT_CHECKED,
  onChange,
  label,
  disabled = false,
}) => {
  return (
    <FormControlLabel
      control={
        <CustomCheckbox
          checked={type === CheckBoxType.CHECKED}
          indeterminate={type === CheckBoxType.HALF}
          onChange={onChange}
          disabled={disabled}
          indeterminateIcon={<IndeterminateCheckBoxOutlinedIcon />}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
