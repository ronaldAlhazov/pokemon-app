// TextInputStyles.ts
import { styled } from "@mui/material/styles";

import { InputLabel } from "@mui/material";

export const CustomInputLabel = styled(InputLabel)`
  font-family: Roboto;
  font-size: 20px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: ${(props) =>
    props.theme.palette.text.secondary}; // Customize color here
  &.MuiInputLabel-shrink {
    color: ${(props) =>
      props.theme.palette.text.secondary}; // Maintain color when shrunk
  }
  &.Mui-focused {
    color: ${(props) =>
      props.theme.palette.text.secondary}; // Maintain color on focus
  }
`;
