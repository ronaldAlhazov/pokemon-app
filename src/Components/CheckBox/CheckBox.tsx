import React from "react";
import { CheckBoxType } from "./consts";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CustomCheckbox } from "./styles";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { CheckBoxProps } from "./types";

const CheckBox = ({
  type,
  onChange,
  label = "",
  disabled = false,
}: CheckBoxProps) => {
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
