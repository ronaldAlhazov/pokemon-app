import { PokemonType } from "../../../PokemonView/Pokemon";
import { PokemonFightData } from "../../types";
export type FightingData = {
  id: number;
  name: string;
  HP: number;
  type: PokemonType[];
  Attack: number;
  Defense: number;
  SpAttack: number;
  SpDefense: number;
  Speed: number;
  img: string;
  currentHP: number;
  isFainted: boolean;
  catchAttempts: number;
};
export type FightSceneProps = {
  myPokemon: PokemonFightData;
  opponent: PokemonFightData;
  addToMyPokemon: (id: number) => void;
  setIsMatchStarted: React.Dispatch<React.SetStateAction<boolean>>;
};
