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
      : colors.NEUTRALS._200, // Change border color on press
  borderWidth: disabled ? "0px" : "1px",
  borderStyle: "solid",
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: isPressed ? colors.NEUTRALS._500 : "#71787F",
  },
});

export const inputBaseStyle = (isPressed: boolean): SxProps => ({
  flex: 1,
  color: isPressed ? colors.NEUTRALS._500 : "#71787F",
  borderColor: "#71787F",
  transition: "color 0.3s ease",
  "&:hover": {
    color: isPressed ? colors.NEUTRALS._500 : "#44484C",
  },
  "&:disabled": {
    color: "#C7CDD3",
  },
});

export const startStyle = (isPressed: boolean, disabled: boolean): SxProps => ({
  p: "10px",
  color: disabled ? "#C7CDD3" : isPressed ? colors.NEUTRALS._500 : "#71787F",
  transition: "color 0.3s ease",
  "&:hover": {
    color: isPressed ? colors.NEUTRALS._500 : "#44484C",
  },
});

export const endStyle = (isPressed: boolean, disabled: boolean): SxProps => ({
  p: "10px",
  color: "#71787F",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#44484C",
  },
});
