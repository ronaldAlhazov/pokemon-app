import { CardActionArea, styled as muiStyled } from "@mui/material";
import { Card as MuiCard } from "@mui/material";
import { styled } from "styled-components";
import { colors } from "../../global-styles";

export const StyledCard = muiStyled(MuiCard)`
  width: 402px;
  height: 396px;
`;

export const StyledCardActionArea = muiStyled(CardActionArea)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 32px;
  align-items: center; 
  gap:9px;
`;

export const StyledImg = styled.img`
  width: 190px;
  height: 150px;
`;

export const ImgContainer = styled.div`
  width: 290px;
  height: 188px;
  border-radius: 8px 8px 0 0;
  background-color: #ebeff699;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PowerText = styled.div`
  display: flex;
  position: absolute;
  top: 7px;
  right: 10px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * + * {
    margin-top: 8px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HealthBarContainer = styled.div`
  width: 100%;
  background-color: ${colors.NEUTRALS._200};
  border-radius: 4px;
  overflow: hidden;
  height: 10px;
  margin-top: 8px;
`;

export const HealthBarFill = styled.div<{ health: number; minHealth: number }>`
  width: ${({ health }) => health}%;
  background-color: ${({ health, minHealth }) =>
    health > minHealth ? colors.CUSTOM.GREEN : colors.CUSTOM.RED};
  height: 100%;
  transition: width 0.3s ease;
`;
