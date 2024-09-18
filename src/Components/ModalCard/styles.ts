import { Card, CardActionArea, styled as muiStyled } from "@mui/material";
import { styled } from "styled-components";
import { colors } from "../../global-styles";

export const StyledCard = muiStyled(Card)`
  width: 502px;
  height: 569px;
`;
export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const getCloseIconStyles = () => ({
  width: 24,
  height: 24,
  color: colors.NEUTRALS._400,
  "&:hover": {
    color: colors.NEUTRALS._500,
  },
});
export const StyledCardActionArea = muiStyled(CardActionArea)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  align-items: flex-start; 
  gap: 10px;
  
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 26px;

  & > * + * {
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.CUSTOM.GRAY};
  width: 454px;
  height: 210px;

  gap: 24px;
`;
export const ContentWrapper = styled.div`
  padding: 24px;
`;

export const FooterContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px;
`;
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.NEUTRALS._300};
  margin: 16px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PairContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0 24px;
  gap: 8px;
`;
