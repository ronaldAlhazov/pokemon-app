import { buttonSizes } from "../../global-styles";
import { Size, ButtonType } from "./consts";

export const getButtonStyles = (
  type: ButtonType,
  size: Size,
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
        backgroundColor: isPressed ? "#182442" : "#3b5aa6",
        "&:hover": {
          backgroundColor: "#293f74",
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
        border: "1px solid #3b5aa6",
        color: "#3b5aa6",
        backgroundColor: isPressed ? "#B1BDDB" : "#F2F5F7",
        "&:hover": {
          backgroundColor: "#ebeff6",
        },
        "&:disabled": {
          color: "#c7cdd3",
          border: "1px solid #c7cdd3",
          backgroundColor: "#f2f5f7",
        },
      };

    case ButtonType.SECONDARY_GRAY:
      return {
        ...commonStyles,
        border: "1px solid #44484c",
        color: "#44484c",
        backgroundColor: isPressed ? "#F2F5F7" : "white",
        "&:hover": {
          color: "#5a6066",
        },
        "&:disabled": {
          color: "#c7cdd3",
          border: "1px solid #c7cdd3",
          backgroundColor: "#f2f5f7",
        },
      };

    case ButtonType.TERTIARY:
      return {
        ...commonStyles,
        border: "none",
        color: "#3b5aa6",
        backgroundColor: isPressed ? "#B1BDDB" : "#F2F5F7",
        "&:hover": {
          backgroundColor: "#ebeff6",
        },
        "&:disabled": {
          color: "#c7cdd3",
          backgroundColor: "#f2f5f7",
        },
      };

    case ButtonType.TERTIARY_GRAY:
      return {
        ...commonStyles,
        border: "none",
        color: "#44484c",
        backgroundColor: isPressed ? "#F2F5F7" : "white",
        "&:hover": {
          color: "#5a6066",
        },
        "&:disabled": {
          color: "#c7cdd3",
          backgroundColor: "#f2f5f7",
        },
      };

    default:
      return {};
  }
};
