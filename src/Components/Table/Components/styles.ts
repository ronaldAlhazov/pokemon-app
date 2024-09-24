import { SxProps } from "@mui/material";

export const footerContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 2,
  height: 34,
};

export const rowsPerPageTextStyle: SxProps = {
  marginRight: 1,
};

export const formControlStyle: SxProps = {
  minWidth: 70,
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
  "& .MuiOutlinedInput-root": {
    border: "none",
    "& fieldset": {
      border: "none",
    },
  },
};

export const selectStyle: SxProps = {
  backgroundColor: "transparent",
  border: "none",
  "& .MuiSelect-select": {
    border: "none",
  },
  "&:before, &:after": {
    border: "none",
  },
};

export const paginationItemStyle: SxProps = {
  display: "inline-flex",
};

export const dropDownContainerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
};
