import { buttonSizes, colors } from "../../global-styles";
import { ButtonSize, ButtonType } from "./consts";

export const getButtonStyles = (
  type: ButtonType,
  size: ButtonSize,
  isPressed: boolean
) => {
  const commonStyles = {
    width: buttonSizes[size].width,
    height: buttonSizes[size].height,
    textTransform: "none",
    boxShadow: isPressed ? "4px 4px 13px 0px #0000000D inset" : "none",
  };

  switch (type) {
    case ButtonType.PRIMARY:
      return {
        ...commonStyles,
        border: "1px solid",
        color: "#ffffff",
        backgroundColor: isPressed ? colors.PRIMATY._500 : colors.PRIMATY._300,
        "&:hover": {
          backgroundColor: colors.PRIMATY._400,
        },
        "&:disabled": {
          border: "none",
          color: "#a8aeb5",
          backgroundColor: "#e3e6e9",
        },
      };

    case ButtonType.SECONDARY:
      return {
        ...commonStyles,
        border: `1px solid ${colors.NEUTRALS._300}`,
        color: colors.PRIMATY._300,
        backgroundColor: isPressed ? colors.PRIMATY._100 : colors.NEUTRALS._100,
        "&:hover": {
          backgroundColor: colors.PRIMATY._50,
        },
        "&:disabled": {
          color: "#c7cdd3",
          border: "1px solid #c7cdd3",
          backgroundColor: colors.NEUTRALS._100,
        },
      };

    case ButtonType.SECONDARY_GRAY:
      return {
        ...commonStyles,
        border: `1px solid ${colors.NEUTRALS._400}`,
        color: colors.NEUTRALS._400,
        backgroundColor: isPressed ? colors.NEUTRALS._100 : "none",
        "&:hover": {
          color: colors.NEUTRALS._300,
          backgroundColor: colors.NEUTRALS._100,
        },
        "&:disabled": {
          color: "#c7cdd3",
          border: "1px solid #c7cdd3",
          backgroundColor: colors.NEUTRALS._100,
        },
      };

    case ButtonType.TERTIARY:
      return {
        ...commonStyles,
        border: "none",
        color: colors.PRIMATY._300,
        backgroundColor: isPressed ? colors.PRIMATY._100 : colors.NEUTRALS._100,
        "&:hover": {
          backgroundColor: colors.PRIMATY._50,
        },
        "&:disabled": {
          color: "#c7cdd3",
          backgroundColor: colors.NEUTRALS._100,
        },
      };

    case ButtonType.TERTIARY_GRAY:
      return {
        ...commonStyles,
        border: "none",
        color: colors.NEUTRALS._400,
        backgroundColor: isPressed ? colors.NEUTRALS._100 : "none",
        "&:hover": {
          color: colors.NEUTRALS._300,
          backgroundColor: colors.NEUTRALS._100,
        },
        "&:disabled": {
          color: "#c7cdd3",
          backgroundColor: colors.NEUTRALS._100,
        },
      };

    default:
      return {};
  }
};
