import React from "react";
import { CheckBoxType } from "./consts";
import { Checkbox, FormControlLabel } from "@mui/material";
import { CustomCheckbox } from "./styles";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import { CheckBoxProps } from "./types";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";

const CheckBox = ({
  type,
  onChange,
  label = "",
  disabled = false,
}: CheckBoxProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <CustomCheckbox
        checked={type === CheckBoxType.CHECKED}
        indeterminate={type === CheckBoxType.HALF}
        onChange={onChange}
        disabled={disabled}
        indeterminateIcon={<IndeterminateCheckBoxOutlinedIcon />}
      />
      <Typography type={TypographyTypes.BODY_MEDIUM} label={label} />
    </div>
  );
};

export default CheckBox;
