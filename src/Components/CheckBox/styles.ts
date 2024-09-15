import { Checkbox } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../global-styles";

export const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: colors.PRIMATY._500,
  "&.Mui-checked": {
    color: colors.PRIMATY._300,
  },
  "&.MuiCheckbox-indeterminate": {
    color: colors.PRIMATY._500,
    "& .MuiSvgIcon-root": {
      "& path": {
        fill: colors.PRIMATY._500,
      },
    },
  },
  // Color when disabled
  "&.Mui-disabled": {
    color: "#B1BDDB",
  },
}));
