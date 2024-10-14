import React, { useEffect } from "react";
import { ButtonContainer, TypographyContainer } from "../styles";
import ButtonComponent from "../../../../../Components/Button/ButtonComponent";
import {
  ButtonSize,
  ButtonType,
} from "../../../../../Components/Button/consts";
import { ButtonsProps } from "./types";
import Typography from "../../../../../Components/Typography/Typography";
import { TypographyTypes } from "../../../../../Components/Typography/consts";

const Buttons = ({
  showStartButton,
  setStartButton,
  onCatchClick,
  isMyPokemonTurn,
  isMatchFinished,
}: ButtonsProps) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setStartButton(!showStartButton);
  };

  return (
    <>
      {showStartButton ? (
        <ButtonComponent
          size={ButtonSize.CIRCULAR}
          type={ButtonType.CIRCULAR}
          label="Fight"
          onClick={onClick}
          disabled={false}
        />
      ) : (
        <ButtonContainer>
          <ButtonComponent
            size={ButtonSize.XLARGE}
            type={ButtonType.PRIMARY_XLARGE}
            label="Catch"
            onClick={onCatchClick}
            disabled={!isMyPokemonTurn && !isMatchFinished}
          />
          <TypographyContainer disabled={!isMyPokemonTurn || isMatchFinished}>
            <Typography
              type={TypographyTypes.HEADING_MEDIUM_BOLD}
              label="Press the space button to attack"
            />
          </TypographyContainer>
        </ButtonContainer>
      )}
    </>
  );
};

export default Buttons;
