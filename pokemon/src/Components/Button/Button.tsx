import React, { useState } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  SecondaryGreyButton,
  TertriaryButton,
  TertriaryGreyButton,
} from "./Style";
import { ButtonProps, TYPE } from "./Tyeps";

const Button: React.FC<ButtonProps> = ({ type, size, disabled }) => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed((prev) => !prev);
    console.log(isPressed);
  };
  const renderButton = () => {
    switch (type) {
      case TYPE.PRIMARY:
        return (
          <PrimaryButton
            size={size}
            isPressed={isPressed}
            onClick={handlePress}
            disabled={disabled}
          >
            Button
          </PrimaryButton>
        );

      case TYPE.SECONDARY:
        return (
          <SecondaryButton
            size={size}
            isPressed={isPressed}
            onClick={handlePress}
            disabled={disabled}
          >
            Button
          </SecondaryButton>
        );
      case TYPE.SECONDARY_GRAY:
        return (
          <SecondaryGreyButton
            size={size}
            isPressed={isPressed}
            onClick={handlePress}
            disabled={disabled}
          >
            Button
          </SecondaryGreyButton>
        );
      case TYPE.TERTIARY:
        return (
          <TertriaryButton
            size={size}
            isPressed={isPressed}
            onClick={handlePress}
            disabled={disabled}
          >
            Button
          </TertriaryButton>
        );
      case TYPE.TERTIARY_GRAY:
        return (
          <TertriaryGreyButton
            size={size}
            isPressed={isPressed}
            onClick={handlePress}
            disabled={disabled}
          >
            Button
          </TertriaryGreyButton>
        );
      default:
        return null;
    }
  };

  return <div>{renderButton()}</div>;
};

export default Button;
