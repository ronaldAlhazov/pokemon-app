import { CardActionArea, styled as muiStyled } from "@mui/material";
import { Card as MuiCard } from "@mui/material";
import { styled } from "styled-components";

export const StyledCard = muiStyled(MuiCard)`
  width: 322px;
  height: 36vh;
  display: flex;                     
  flex-direction: row; 
  box-shadow: none;
  border-radius: 8px;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
  `;

export const StyledCardActionArea = muiStyled(CardActionArea)`
  display: flex;
  flex-direction: column;            
  height: 100%;
  align-items: flex-start; 
  gap: 10px;                         
`;

export const StyledImg = styled.img`
  width: 190px;
  height: 20vh;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 22vh;
  border-radius: 8px;
  background-color: #ebeff699;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SideCol = styled.div`
  width: 10%;
  cursor: pointer;
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
