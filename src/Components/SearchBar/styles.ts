import { SxProps } from "@mui/material";
import { colors } from "../../global-styles";

export const paperStyle = (isPressed: boolean, disabled: boolean): SxProps => ({
  width: 297,
  height: 38,
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  borderColor: disabled
    ? "none"
    : isPressed
      ? colors.NEUTRALS._500
      : colors.NEUTRALS._200,
  borderWidth: disabled ? "0px" : "1px",
  borderStyle: "solid",
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._600,
  },
});

export const inputBaseStyle = (isPressed: boolean): SxProps => ({
  flex: 1,
  color: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._600,
  borderColor: colors.NEUTRALS._600,
  transition: "color 0.3s ease",
  "&:hover": {
    color: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._400,
  },
  "&:disabled": {
    color: colors.CUSTOM._100,
  },
});

export const startStyle = (isPressed: boolean, disabled: boolean): SxProps => ({
  p: "10px",
  color: disabled
    ? colors.CUSTOM._100
    : isPressed
      ? colors.NEUTRALS._500
      : colors.NEUTRALS._600,
  transition: "color 0.3s ease",
  "&:hover": {
    color: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._400,
  },
});

export const endStyle = (isPressed: boolean, disabled: boolean): SxProps => ({
  p: "10px",
  color: colors.NEUTRALS._600,
  transition: "color 0.3s ease",
  "&:hover": {
    color: colors.NEUTRALS._400,
  },
});
