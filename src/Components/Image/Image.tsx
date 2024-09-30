import React from "react";
import { ImageProps } from "./types";
import { ImgContainer, StyledImg } from "./styles";

const Image = ({
  src,
  alt,
  containerWidth,
  containerHeight,
  imgWidth,
  imgHeight,
  backgroundColor,
}: ImageProps) => {
  return (
    <ImgContainer
      containerwidth={containerWidth}
      containerheight={containerHeight}
      backgroundColor={backgroundColor}
    >
      <StyledImg
        src={src}
        alt={alt}
        imgwidth={imgWidth}
        imgheight={imgHeight}
      />
    </ImgContainer>
  );
};

export default Image;
