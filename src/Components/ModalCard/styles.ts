import { Card, CardActionArea, styled as muiStyled } from "@mui/material";
import { styled } from "styled-components";
import { colors } from "../../global-styles";

export const StyledCard = muiStyled(Card)`
  width: 502px;
  height: 569px;
`;

export const StyledCardActionArea = muiStyled(CardActionArea)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  align-items: center; 
  gap: 10px;
`;

export const StyledImg = styled.img`
  width: 190px;
  height: 150px;
`;

export const ImgContainer = styled.div`
  width: 454px;
  height: 158px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
`;
