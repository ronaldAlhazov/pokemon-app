import { ButtonSize } from "./Components/Button/consts";

export const colors = {
  NEUTRALS: {
    White: "#FFFFFF",
    _100: "#F2F5F7",
    _200: "#A8AEB5",
    _300: "#5A6066",
    _400: "#44484C",
    _500: "#2D3033",
  },
  PRIMATY: {
    _50: "#EBEFF6",
    _100: "#B1BDDB",
    _200: "#627BB8",
    _300: "#3B5AA6",
    _400: "#293F74",
    _500: "#182442",
  },
  SECONDARY: {
    _100: "#FFFAE6",
    _200: "#FFE069",
    _300: "#FFCB05",
    _400: "#CCA204",
    _500: "#4C3D01",
  },
  CUSTOM: {
    _100: "#c7cdd3",
    _200: "#e3e6e9",
    _300: "#a8aeb5",
    _500: "#0000000D",
  },
};

export const buttonSizes = {
  [ButtonSize.SMALL]: { width: "74px", height: "32px" },
  [ButtonSize.MEDIUM]: { width: "80px", height: "36px" },
  [ButtonSize.LARGE]: { width: "80px", height: "40px" },
};
