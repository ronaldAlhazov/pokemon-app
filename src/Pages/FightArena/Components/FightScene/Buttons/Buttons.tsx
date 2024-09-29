import React from "react";
import { ButtonContainer } from "../styles";
import ButtonComponent from "../../../../../Components/Button/ButtonComponent";
import {
  ButtonSize,
  ButtonType,
} from "../../../../../Components/Button/consts";
import { ButtonsProps } from "./types";

const Buttons = ({
  showStartButton,
  setStartButton,
  onAttackClick,
  onCatchClick,
  isMyPokemonWin,
  isFightEnded,
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
            label="Attack"
            onClick={onAttackClick}
            disabled={isFightEnded}
          />
          <ButtonComponent
            size={ButtonSize.XLARGE}
            type={ButtonType.SECONDARY_GRAY_XLARGE}
            label="Catch"
            onClick={onCatchClick}
            disabled={false}
          />
        </ButtonContainer>
      )}
    </>
  );
};

export default Buttons;
