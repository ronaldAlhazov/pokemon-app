import { DropDownType } from "./consts";

export type DropdownOption = {
  label: string;
  value: string;
  image?: string; // Optional image URL
};

export type DropdownProps = {
  dropDownType: DropDownType;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
};
