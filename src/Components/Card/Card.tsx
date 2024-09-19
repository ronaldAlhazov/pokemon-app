import { CardProps } from "./types";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { colors } from "../../global-styles";
import {
  StyledCard,
  StyledCardActionArea,
  StyledImg,
  ImgContainer,
  ContentContainer,
  IconContainer,
  PowerText,
} from "./styles";
import StrengthIcon from "./strengthIcon";

const Card = ({ id, img, name, power, onCardClick }: CardProps) => {
  return (
    <StyledCard>
      <StyledCardActionArea
        onClick={() => {
          onCardClick(name);
        }}
      >
        <ImgContainer>
          <StyledImg src={img} alt={name} />
          <IconContainer>
            <StrengthIcon />
          </IconContainer>
          <PowerText>
            <Typography
              label={`${power}px`}
              type={TypographyTypes.CUSTOM}
              weight={700}
              size={12}
              line={19}
              color={colors.NEUTRALS._500}
            />
          </PowerText>
        </ImgContainer>
        <ContentContainer>
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
        </ContentContainer>
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default Card;
