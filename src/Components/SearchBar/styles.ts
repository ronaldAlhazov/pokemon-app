import { SxProps } from "@mui/material";
import { colors } from "../../global-styles";

export const paperStyle = (isPressed: boolean, disabled: boolean): SxProps => ({
  width: "40vh",
  height: "93%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  boxShadow: "none",

  border: disabled
    ? "none"
    : `1px solid ${isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._200}`,
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._600,
  },
});

export const inputBaseStyle = (isPressed: boolean): SxProps => ({
  flex: 1,
  color: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._600,
  borderColor: colors.NEUTRALS._200,
  transition: "color 0.3s ease",

  "& input": {
    color: colors.NEUTRALS._600,

    "&:hover": {
      color: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._400,
      "&::placeholder": {
        color: isPressed ? colors.NEUTRALS._500 : colors.NEUTRALS._400,
      },
    },

    "&::placeholder": {
      opacity: 1,
    },
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
