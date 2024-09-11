import { styled } from "@mui/material/styles";
import { InputLabel, Paper, InputBase, IconButton } from "@mui/material";
import { colors } from "../../global-styles";

// Custom Input Label
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

// Custom Paper for the Input
export const CustomPaper = styled(Paper)<{ disabled?: boolean }>`
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 195px;
  margin-top: 24px;
  border: 1px solid #98a2b4; // Default border color

  &:hover {
    border: 1px solid #75839b; // Border color on hover
  }

  &:focus-within {
    border: 1px solid #460dbf; // Solid border color when typing
    border-image-source: none; // Remove the gradient
  }

  ${({ disabled }) =>
    disabled &&
    `
      border: 1px solid #75839b; 
      background-color: ${colors.NEUTRALS.White}; 
      cursor: not-allowed;
    `}
`;

// Custom InputBase
export const CustomInputBase = styled(InputBase)<{ disabled?: boolean }>`
  margin-left: 8px;
  flex: 1;
  color: #536482;
  &:hover {
    color: #3a4d71;
  }
  &:focus {
    color: #22375f; // Text color when focused
  }
  ${({ disabled }) =>
    disabled &&
    `
      color: #75839b; // Text color when disabled
      cursor: not-allowed; // Change cursor when disabled
    `}
`;

// Custom IconButton
export const CustomIconButton = styled(IconButton)`
  padding: 5px;
`;
