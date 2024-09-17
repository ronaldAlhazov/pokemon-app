import React from "react";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { colors } from "../../global-styles";
import {
  ContentContainer,
  ContentWrapper,
  InfoContainer,
  Separator,
} from "./styles";

interface ContentContainerProps {
  description: string;
  hight: number;
  weight: number;
  category: string;
  abilities: string;
}

const Content: React.FC<ContentContainerProps> = ({
  description,
  hight,
  weight,
  category,
  abilities,
}) => {
  return (
    <ContentContainer>
      <ContentWrapper>
        <Typography
          label={description}
          type={TypographyTypes.CUSTOM}
          weight={400}
          size={18}
          line={22}
          color={colors.NEUTRALS._500}
        />
        <Separator />
        <InfoContainer>
          <Typography
            label={`Height: ${hight}`}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={14}
            line={20}
            color={colors.NEUTRALS._500}
          />
          <Typography
            label={`Weight: ${weight}`}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={14}
            line={20}
            color={colors.NEUTRALS._500}
          />
          <Typography
            label={`Category: ${category}`}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={14}
            line={20}
            color={colors.NEUTRALS._500}
          />
          <Typography
            label={`Abilities: ${abilities}`}
            type={TypographyTypes.CUSTOM}
            weight={400}
            size={14}
            line={20}
            color={colors.NEUTRALS._500}
          />
        </InfoContainer>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
