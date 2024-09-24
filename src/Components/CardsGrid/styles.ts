import { SxProps, Theme } from "@mui/system";

export const gridContainerStyle: SxProps<Theme> = {
  flexGrow: 1,
};

export const gridItemStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiPaper-root": {
    width: "322px",
    boxSizing: "border-box",
  },
};
