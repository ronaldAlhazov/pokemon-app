import { CardActionArea, styled as muiStyled } from "@mui/material";
import { Card as MuiCard } from "@mui/material";
import { styled } from "styled-components";
import { colors } from "../../global-styles";

export const StyledCard = muiStyled(MuiCard, {
  shouldForwardProp: (prop) => prop !== "iswinner",
})<{
  border: string;
  iswinner: boolean;
}>`
  width: 402px;
  height: 396px;
  min-width: 295px;
  min-height: 200px;
  box-shadow: none;
  border: ${(props) => props.border || "none"}; 
  transition: transform 0.3s, border 0.3s;
  
  ${(props) =>
    props.iswinner &&
    `
    border: 3px solid gold; 
    transform: scale(1.05);
  `}
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
export const SpeedText = styled.div`
  display: flex;
  position: absolute;
  top: 7px;
  left: 10px;
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

export const HealthBarFill = styled.div<{
  starthealth: number;
  currenthealth: number;
}>`
  width: ${({ currenthealth, starthealth }) =>
    (currenthealth / starthealth) * 100}%;
  background-color: ${({ currenthealth, starthealth }) => {
    const threshold = starthealth * 0.3;
    return currenthealth <= threshold ? colors.CUSTOM.RED : colors.CUSTOM.GREEN;
  }};
  height: 100%;
  transition: width 0.3s ease;
`;
