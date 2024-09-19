import { TypographyTypes } from "./consts";

export type TypographyProps = {
  label: String;
  type: TypographyTypes;
  children?: React.ReactNode;
  weight?: number;
  size?: number;
  line?: number;
  color?: string;
};
