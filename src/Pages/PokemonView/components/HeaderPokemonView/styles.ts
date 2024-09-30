import { styled } from "styled-components";
import { colors } from "../../../../global-styles";

export const getDropdownStyle = (sortByLength: number) => ({
  width: Math.max(120, sortByLength * 13),
  height: 38,
  paddingBottom: "16px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.NEUTRALS._200,
    },
    "&:hover fieldset": {
      borderColor: colors.NEUTRALS._200,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.NEUTRALS._200,
    },
  },
  "& .MuiInputLabel-root": {
    color: colors.NEUTRALS._400,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: colors.NEUTRALS._400,
  },
});

export const TabAndSearchBarContainer = styled.div`
  height: 38px;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 32px;
`;

export const HeaderContainer = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  height: 38px;
  width: 100%;
`;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: 38px;
`;
