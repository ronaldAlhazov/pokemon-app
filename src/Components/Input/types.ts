import { SxProps } from "@mui/material";

export interface InputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  placeHolder?: string;
  disabled?: boolean;
  error?: boolean;
  setIsPressed: (value: boolean) => void;
  onClickIconStart?: (value: string) => void;
  onClickIconEnd?: (value: string) => void;
  onError?: () => void;
  IconStart?: React.ComponentType;
  IconEnd?: React.ComponentType;
  IconError?: React.ComponentType;
  showIconStart?: boolean;
  showIconEnd?: boolean;
  startStyle?: SxProps;
  endStyle?: SxProps;
  errorStyle?: SxProps;
  inputBaseStyle?: SxProps;
  paperStyle?: SxProps;
}
