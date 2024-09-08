export enum TYPE {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SECONDARY_GRAY = "secondaryGray",
  TERTIARY = "tertiary",
  TERTIARY_GRAY = "tertiaryGray",
}

export enum SIZE {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export interface ButtonProps {
  type: TYPE;
  size: SIZE;
  disabled: boolean;
}
