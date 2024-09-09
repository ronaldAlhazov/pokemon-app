import { Size, ButtonType } from "./consts";

export type ButtonProps = {
  label: String;
  type: ButtonType;
  size: Size;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
