import { ButtonSize, ButtonType } from "./consts";

export type ButtonProps = {
  label: String;
  type: ButtonType;
  size: ButtonSize;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isPressed?: boolean;
};
