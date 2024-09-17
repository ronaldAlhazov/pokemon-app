import { CardActionArea, styled as muiStyled } from "@mui/material";
import { Card as MuiCard } from "@mui/material";
import { styled } from "styled-components";

export const StyledCard = muiStyled(MuiCard)`
  width: 322px;
  height: 308px;
`;

export const StyledCardActionArea = muiStyled(CardActionArea)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  align-items: flex-start; 
  gap:10px;
`;

export const StyledImg = styled.img`
  width: 190px;
  height: 150px;
`;

export const ImgContainer = styled.div`
  width: 274px;
  height: 188px;
  border-radius: 8px 8px 0 0;
  background-color: #ebeff699;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PowerText = styled.div`
  display: flex;
  position: absolute;
  top: 7px;
  right: 30px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & > * + * {
    margin-top: 10px;
  }
`;
