import { SxProps } from "@mui/material";

export type DropdownOption = {
  label: string;
  value: string;
  image?: string; // Optional image URL
};

export type DropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  style: SxProps;
};
