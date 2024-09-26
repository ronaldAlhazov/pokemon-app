import { PokemonFightData } from "../../types";
export type FightingData = {
  id: number;
  name: string;
  currentHP: number;
  isFainted: boolean;
  catchAttempts: number;
};
export type FightSceneProps = {
  myPokemon: PokemonFightData;
  opponent: PokemonFightData;
  addToMyPokemon: (id: number) => void;
};
