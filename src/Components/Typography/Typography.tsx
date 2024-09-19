import { TypographyProps } from "./types";
import { StyledTypography } from "./styles";

const Typography = ({
  label,
  type,
  children,
  weight,
  size,
  line,
  color,
}: TypographyProps) => {
  return (
    <StyledTypography
      type={type}
      color={color}
      weight={weight}
      size={size}
      line={line}
    >
      {children || label}
    </StyledTypography>
  );
};

export default Typography;
