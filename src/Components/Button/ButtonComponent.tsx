import React, { useState } from "react";
import { ButtonProps } from "./types";
import { getButtonStyles } from "./styles";
import Button from "@mui/material/Button";
import { TypographyTypes } from "../Typography/consts";
import Typography from "../Typography/Typography";
import { ButtonSize } from "./consts";

const ButtonComponent = ({
  label,
  type,
  size,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <Button
      sx={getButtonStyles(type, size)}
      onClick={onClick}
      disabled={disabled}
    >
      {size == ButtonSize.XLARGE ? (
        <Typography
          type={TypographyTypes.CUSTOM}
          label={label}
          weight={500}
          size={40}
          line={52}
        />
      ) : size == ButtonSize.CIRCULAR ? (
        <Typography
          type={TypographyTypes.CUSTOM}
          label={label}
          weight={700}
          size={48}
          line={52}
        />
      ) : (
        <Typography
          type={
            size == ButtonSize.SMALL
              ? TypographyTypes.BUTTON_SMALL
              : TypographyTypes.BUTTON_MEDIUM_BIG
          }
          label={label}
        />
      )}
    </Button>
  );
};

export default ButtonComponent;
