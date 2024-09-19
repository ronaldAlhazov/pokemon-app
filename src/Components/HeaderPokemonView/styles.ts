import { SxProps, Theme } from "@mui/material";
import { styled } from "styled-components";

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

export const TabAndSearchBarContainer = styled.div`
  height: 38px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  gap: 32px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
`;
