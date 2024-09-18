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
  PowerText,
  HealthBarContainer,
  HealthBarFill,
} from "./styles";

import { FightType } from "./consts";

const FightCard = ({
  id,
  img,
  name,
  power,
  fightType = FightType.NONE,
  health,
  minHealth,
}: CardProps) => {
  return (
    <StyledCard>
      <StyledCardActionArea>
        <Typography
          label={fightType}
          type={TypographyTypes.CUSTOM}
          weight={700}
          size={24}
          line={26}
          color={colors.NEUTRALS._400}
        />
        <ImgContainer>
          <StyledImg src={img} alt={name} />
          <PowerText>
            <Typography
              label={`${power}pwr`}
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
        <HealthBarContainer>
          <HealthBarFill health={health} minHealth={minHealth} />
        </HealthBarContainer>
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default FightCard;
