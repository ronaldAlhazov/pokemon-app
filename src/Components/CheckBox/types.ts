import { CheckBoxType } from "./consts";

export type CheckBoxProps = {
  type?: CheckBoxType;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  disabled?: boolean;
};
