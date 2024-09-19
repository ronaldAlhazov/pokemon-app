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
      containerWidth={containerWidth}
      containerHeight={containerHeight}
      backgroundColor={backgroundColor}
    >
      <StyledImg
        src={src}
        alt={alt}
        imgWidth={imgWidth}
        imgHeight={imgHeight}
      />
    </ImgContainer>
  );
};

export default Image;
