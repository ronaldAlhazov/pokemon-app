import Typography from "../../Typography/Typography";
import { TypographyTypes } from "../../Typography/consts";
import { StyledGridOverlay } from "./styles";

interface CustomNoResultsOverlayProps {
  message: string;
}
const CustomNoResultsOverlay: React.FC<CustomNoResultsOverlayProps> = ({
  message,
}) => (
  <StyledGridOverlay>
    <img
      src={`${process.env.PUBLIC_URL}/noRows.png`}
      alt="No Results"
      style={{ width: 150, height: 150, marginBottom: 10 }}
    />
    <Typography type={TypographyTypes.HEADING_MEDIUM_REGULAR} label={message} />
  </StyledGridOverlay>
);

export default CustomNoResultsOverlay;
