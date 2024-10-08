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
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed((pervState) => !pervState);
    onClick(event);
  };

  return (
    <Button
      sx={getButtonStyles(type, size, isPressed)}
      onClick={handlePress}
      disabled={disabled}
    >
      <Typography
        type={
          size == ButtonSize.SMALL
            ? TypographyTypes.BUTTON_SMALL
            : TypographyTypes.BUTTON_MEDIUM_BIG
        }
        label={label}
      />
    </Button>
  );
};

export default ButtonComponent;
