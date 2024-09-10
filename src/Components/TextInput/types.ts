export type TextInputProps = {
  label?: string;
  halperText?: string;
  placeHolder?: string;
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
