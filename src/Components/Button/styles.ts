import { buttonSizes, colors } from "../../global-styles";
import { ButtonSize, ButtonType } from "./consts";
import "@fontsource/roboto";
export const getButtonStyles = (
  type: ButtonType,
  size: ButtonSize,
  isPressed: boolean
) => {
  const commonStyles = {
    width: buttonSizes[size].width,
    height: buttonSizes[size].height,
    textTransform: "none",
    boxShadow: "none",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
  };

  switch (type) {
    case ButtonType.PRIMARY:
      return {
        ...commonStyles,
        border: "1px solid",
        color: colors.NEUTRALS.White,
        backgroundColor: colors.PRIMATY._300,
        "&:hover": {
          backgroundColor: colors.PRIMATY._400,
        },
        "&:active": {
          backgroundColor: colors.PRIMATY._500,
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
        backgroundColor: colors.NEUTRALS._100,
        "&:hover": {
          backgroundColor: colors.PRIMATY._50,
        },
        "&:active": {
          backgroundColor: colors.PRIMATY._100,
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
        backgroundColor: "none",
        "&:hover": {
          color: colors.NEUTRALS._300,
          backgroundColor: colors.NEUTRALS._100,
        },
        "&:active": {
          backgroundColor: colors.PRIMATY._100,
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
        backgroundColor: colors.NEUTRALS._100,
        "&:hover": {
          backgroundColor: colors.PRIMATY._50,
        },
        "&:active": {
          backgroundColor: colors.PRIMATY._100,
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
        backgroundColor: "none",
        "&:hover": {
          color: colors.NEUTRALS._300,
          backgroundColor: colors.NEUTRALS._100,
        },
        "&:active": {
          backgroundColor: colors.NEUTRALS._100,
        },
        "&:disabled": {
          color: colors.CUSTOM._100,
          backgroundColor: colors.NEUTRALS._100,
        },
      };
    case ButtonType.PRIMARY_XLARGE:
      return {
        ...commonStyles,
        border: "none",
        color: colors.NEUTRALS.White,
        backgroundColor: colors.PRIMATY._300,
        borderRadius: "50px",
        "&:hover": {
          backgroundColor: colors.PRIMATY._400,
        },
        "&:active": {
          backgroundColor: colors.PRIMATY._500,
        },
        "&:disabled": {
          border: "none",
          color: colors.NEUTRALS._200,
          backgroundColor: colors.CUSTOM._200,
        },
      };
    case ButtonType.SECONDARY_GRAY_XLARGE:
      return {
        ...commonStyles,
        border: "none",
        color: colors.NEUTRALS._200,
        backgroundColor: colors.PRIMATY._50,
        borderRadius: "50px",
        "&:hover": {
          color: colors.NEUTRALS._300,
          backgroundColor: colors.NEUTRALS._100,
        },
        "&:active": {
          backgroundColor: colors.NEUTRALS._300,
        },
        "&:disabled": {
          border: "none",
          color: colors.NEUTRALS._200,
          backgroundColor: colors.CUSTOM._200,
        },
      };
    case ButtonType.CIRCULAR:
      return {
        ...commonStyles,
        border: "none",
        color: colors.NEUTRALS.White,
        backgroundColor: colors.PRIMATY._300,
        borderRadius: "50%",
        "&:hover": {
          backgroundColor: colors.PRIMATY._400,
        },
        "&:active": {
          backgroundColor: colors.PRIMATY._500,
        },
        "&:disabled": {
          border: "none",
          color: colors.NEUTRALS._200,
          backgroundColor: colors.CUSTOM._200,
        },
      };
    case ButtonType.BUTTON_HEADER:
      return {
        ...commonStyles,
        border: "none",
        fontWeight: 400,
        color: colors.PRIMATY._300,
        backgroundColor: isPressed ? colors.PRIMATY._50 : "none",
        "&:hover": {
          backgroundColor: colors.PRIMATY._50,
          fontWeight: 400,
        },
        "&:active": {
          backgroundColor: colors.PRIMATY._50,
          fontWeight: 700,
        },
        "&:disabled": {
          fontWeight: 400,
          color: colors.CUSTOM._100,
          backgroundColor: colors.NEUTRALS._100,
        },
      };

    default:
      return {};
  }
};
