import { PokemonFightData } from "../../types";
export type FightingData = {
  id: number;
  name: string;
  currentHP: number;
  isFainted: boolean;
};
export type FightSceneProps = {
  myPokemon: PokemonFightData;
  opponent: PokemonFightData;
};
