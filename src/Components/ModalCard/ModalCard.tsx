import React from "react";
import { ModalCardProps } from "./types";
import {
  ContentContainer,
  FooterContainer,
  HeaderContainer,
  ImgContainer,
  InfoContainer,
  Separator,
  StyledCard,
  StyledCardActionArea,
  StyledImg,
} from "./styles";
import Typography from "../Typography/Typography";
import { TypographyTypes } from "../Typography/consts";
import { colors } from "../../global-styles";
import ButtonComponent from "../Button/ButtonComponent";
import { ButtonSize, ButtonType } from "../Button/consts";
import Content from "./Content";

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
}: ModalCardProps) => {
  return (
    <StyledCard>
      <StyledCardActionArea>
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
        <ImgContainer>
          <StyledImg src={img} />
        </ImgContainer>
        <Content
          description={description}
          hight={hight}
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
