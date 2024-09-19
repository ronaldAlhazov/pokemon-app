import React from "react";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { colors } from "../../global-styles";
import {
  ContentContainer,
  ContentWrapper,
  InfoContainer,
  Separator,
  PairContainer,
} from "./styles";

interface ContentContainerProps {
  description: string;
  height: number;
  weight: number;
  category: string;
  abilities: string;
}

const Content: React.FC<ContentContainerProps> = ({
  description,
  height,
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
          <PairContainer>
            <Typography
              label={`Height`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={14}
              line={18}
              color={colors.NEUTRALS._400}
            />
            <Typography
              label={`${height}`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={18}
              line={22}
              color={colors.NEUTRALS._500}
            />
          </PairContainer>
          <PairContainer>
            <Typography
              label={`Weight`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={14}
              line={18}
              color={colors.NEUTRALS._400}
            />
            <Typography
              label={`${weight}`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={18}
              line={22}
              color={colors.NEUTRALS._500}
            />
          </PairContainer>
          <PairContainer>
            <Typography
              label={`Category`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={14}
              line={18}
              color={colors.NEUTRALS._400}
            />
            <Typography
              label={`${category}`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={18}
              line={22}
              color={colors.NEUTRALS._500}
            />
          </PairContainer>
          <PairContainer>
            <Typography
              label={`Abilities`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={14}
              line={18}
              color={colors.NEUTRALS._400}
            />
            <Typography
              label={`${abilities}`}
              type={TypographyTypes.CUSTOM}
              weight={400}
              size={18}
              line={22}
              color={colors.NEUTRALS._500}
            />
          </PairContainer>
        </InfoContainer>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default Content;
