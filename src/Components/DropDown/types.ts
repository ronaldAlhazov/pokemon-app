import { SxProps } from "@mui/material";
import { DropDownType } from "./consts";

export type DropdownOption = {
  label: string;
  value: string;
  image?: string;
};

export type DropdownProps = {
  type?: DropDownType;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  style: SxProps;
};
