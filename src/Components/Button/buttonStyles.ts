import { buttonSizes, colors } from "../../global-styles";
import { ButtonSize, ButtonType } from "./buttonConsts";

export const getButtonStyles = (
  type: ButtonType,
  size: ButtonSize,
  isPressed: boolean
) => {
  const commonStyles = {
    width: buttonSizes[size].width,
    height: buttonSizes[size].height,
    textTransform: "none",
    boxShadow: isPressed
      ? `4px 4px 13px 0px ${colors.CUSTOM._500} inset`
      : "none",
  };

  switch (type) {
    case ButtonType.PRIMARY:
      return {
        ...commonStyles,
        border: "1px solid",
        color: colors.NEUTRALS.White,
        backgroundColor: isPressed ? colors.PRIMATY._500 : colors.PRIMATY._300,
        "&:hover": {
          backgroundColor: colors.PRIMATY._400,
        },
        "&:disabled": {
          border: "none",
          color: colors.NEUTRALS._200,
          backgroundColor: colors.CUSTOM._200,
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
          color: colors.CUSTOM._100,
          border: `1px solid ${colors.CUSTOM._100}`,
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
          color: colors.CUSTOM._100,
          border: `1px solid ${colors.CUSTOM._100}`,
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
          color: colors.CUSTOM._100,
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
          color: colors.CUSTOM._100,
          backgroundColor: colors.NEUTRALS._100,
        },
      };

    default:
      return {};
  }
};
