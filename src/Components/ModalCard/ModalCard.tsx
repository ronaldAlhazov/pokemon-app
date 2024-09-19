import { ModalCardProps } from "./types";
import {
  FooterContainer,
  getCloseIconStyles,
  HeaderContainer,
  IconContainer,
  StyledCard,
  StyledCardActionArea,
} from "./styles";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { colors } from "../../global-styles";
import ButtonComponent from "../Button/ButtonComponent";
import { ButtonSize, ButtonType } from "../Button/consts";
import Content from "./Content";
import Image from "../Image/Image";
import CloseIcon from "@mui/icons-material/Close";

const ModalCard = ({
  id,
  img,
  name,
  description,
  hight,
  weight,
  category,
  abilities,
  onStartFightButton,
  onClose,
}: ModalCardProps) => {
  return (
    <StyledCard>
      <StyledCardActionArea>
        <IconContainer>
          <CloseIcon onClick={onClose} sx={getCloseIconStyles} />
        </IconContainer>
        <HeaderContainer>
          <Typography
            label={id}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={16}
            line={26}
            color={colors.NEUTRALS._200}
          />
          <Typography
            label={name}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={24}
            line={26}
          />
        </HeaderContainer>
        <Image
          src={img}
          alt={name}
          imgWidth="190px"
          imgHeight="150px"
          containerHeight="158px"
          containerWidth="454px"
        />
        <Content
          description={description}
          height={hight}
          weight={weight}
          category={category}
          abilities={abilities}
        />
        <FooterContainer>
          <ButtonComponent
            label="Start a Fight"
            type={ButtonType.PRIMARY}
            size={ButtonSize.MEDIUM}
            disabled={false}
            onClick={onStartFightButton}
          />
        </FooterContainer>
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default ModalCard;
