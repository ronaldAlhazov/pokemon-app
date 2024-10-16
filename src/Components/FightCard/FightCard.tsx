import { FightCardProps } from "./types";
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
  SpeedText,
} from "./styles";

import { FightType } from "./consts";

const FightCard = ({
  id,
  img,
  name,
  power,
  speedAttack,
  fightType = FightType.NONE,
  startHealth,
  currentHealth,
  border,
  isWinner,
}: FightCardProps) => {
  return (
    <StyledCard border={border} iswinner={isWinner}>
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
          <SpeedText>
            <Typography
              label={`${speedAttack}sp`}
              type={TypographyTypes.CUSTOM}
              weight={700}
              size={12}
              line={19}
              color={colors.NEUTRALS._500}
            />
          </SpeedText>
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
          <HealthBarFill
            starthealth={startHealth}
            currenthealth={currentHealth}
          />
        </HealthBarContainer>
      </StyledCardActionArea>
    </StyledCard>
  );
};

export default FightCard;
