export type ButtonsProps = {
  showStartButton: boolean;
  setStartButton: (val: boolean) => void;
  onAttackClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onCatchClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isMyPokemonWin: boolean;
  isFightEnded: boolean;
};
