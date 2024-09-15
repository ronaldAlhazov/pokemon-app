import { TypographyProps } from "./types";
import { StyledTypography } from "./styles";

const Typography = ({ label, type, children }: TypographyProps) => {
  return (
    <div>
      <StyledTypography type={type}>{children || label}</StyledTypography>
    </div>
  );
};

export default Typography;
