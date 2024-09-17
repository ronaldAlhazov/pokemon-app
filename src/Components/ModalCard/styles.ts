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
  align-items: center; // Centers all content horizontally
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
  justify-content: center; // Centers header content vertically
  align-items: center; // Centers header content horizontally

  & > * + * {
    margin-top: 10px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ebeff699;
  width: 454px;
  height: 210px;

  gap: 24px;
`;
export const ContentWrapper = styled.div`
  padding: 24px 24px 0px 24px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center; // Centers the button horizontally
  align-items: center; // Centers the button vertically
`;
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.NEUTRALS._300}; // Adjust color as needed
  margin: 16px 0; // Adds space above and below the line
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; // Distributes space between items
  width: 100%;
  padding: 0 24px; // Adds padding to the sides
  box-sizing: border-box; // Ensures padding is included in the width
`;
