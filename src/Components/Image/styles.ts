import { styled } from "styled-components";
import { ImageProps } from "./types";
import { colors } from "../../global-styles";
interface ImgContainerProps {
  containerwidth?: string;
  containerheight?: string;
  backgroundColor?: string;
}

interface StyledImgProps {
  imgwidth?: string;
  imgheight?: string;
  borderRadius?: string;
}

export const StyledImg = styled.img<StyledImgProps>`
  width: ${({ imgwidth: imgWidth }) => imgWidth || "190px"};
  height: ${({ imgheight: imgHeight }) => imgHeight || "150px"};
  border-radius: ${({ borderRadius }) => borderRadius || "0%"};
`;

export const ImgContainer = styled.div<ImgContainerProps>`
  width: ${({ containerwidth: containerWidth }) => containerWidth || "454px"};
  height: ${({ containerheight: containerHeight }) =>
    containerHeight || "158px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "none"};
  margin-bottom: 10px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  background-color: ${colors.PRIMATY._50};
  overflow: hidden;
`;
