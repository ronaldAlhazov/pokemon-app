import React from "react";
import { ButtonContainer } from "../styles";
import ButtonComponent from "../../../../../Components/Button/ButtonComponent";
import {
  ButtonSize,
  ButtonType,
} from "../../../../../Components/Button/consts";

type ButtonsProps = {
  showStartButton: boolean;
  setStartButton: (val: boolean) => void;

  onAttackClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCatchClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Buttons = ({
  showStartButton,
  setStartButton,
  onAttackClick,
  onCatchClick,
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
            disabled={false}
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
