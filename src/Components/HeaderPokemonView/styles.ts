import { SxProps, Theme } from "@mui/material";

export const getDropdownStyle = (sortByLength: number) => ({
  width: Math.max(120, sortByLength * 13),
  height: 38,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#A8AEB5",
    },
    "&:hover fieldset": {
      borderColor: "#A8AEB5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#A8AEB5",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#44484C",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#44484C",
  },
});
