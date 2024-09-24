import { colors } from "../../../../../global-styles";

export const getTabStyle = () => ({
  width: "71px",
  height: "38px",
  minHeight: "38px",
  padding: "0",
  textTransform: "none",
  "&:hover": {
    color: colors.PRIMATY._500,
    backgroundColor: colors.PRIMATY._50,
  },
  "&.Mui-selected": {
    borderBottom: "2px solid black",
    color: colors.PRIMATY._500,
    "& svg": {
      color: colors.CUSTOM._600,
    },
  },
});
