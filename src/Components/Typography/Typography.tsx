import { TypographyProps } from "./types";
import { StyledTypography } from "./styles";

const Typography = ({ label, type, children }: TypographyProps) => {
  return <StyledTypography type={type}>{children || label}</StyledTypography>;
};

export default Typography;
