export type ButtonsProps = {
  showStartButton: boolean;
  setStartButton: (val: boolean) => void;
  onCatchClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isMyPokemonTurn: boolean;
  isMatchFinished: boolean;
};
