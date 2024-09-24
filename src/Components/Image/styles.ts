import { styled } from "styled-components";
import { ImageProps } from "./types";
interface ImgContainerProps {
  containerWidth?: string;
  containerHeight?: string;
  backgroundColor?: string;
}

interface StyledImgProps {
  imgWidth?: string;
  imgHeight?: string;
  borderRadius?: string;
}

export const StyledImg = styled.img<StyledImgProps>`
  width: ${({ imgWidth }) => imgWidth || "190px"};
  height: ${({ imgHeight }) => imgHeight || "150px"};
  border-radius: ${({ borderRadius }) => borderRadius || "0%"};
`;

export const ImgContainer = styled.div<ImgContainerProps>`
  width: ${({ containerWidth }) => containerWidth || "454px"};
  height: ${({ containerHeight }) => containerHeight || "158px"};
  background-color: ${({ backgroundColor }) => backgroundColor || "none"};
  margin-bottom: 10px;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
