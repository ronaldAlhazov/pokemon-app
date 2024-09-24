import { PokemonType } from "../FightScene/consts";

export type PokemonFightData = {
  id: number;
  name: string;
  type: PokemonType[];
  img: string;
  stats: {
    HP: number;
    Attack: number;
    Defense: number;
    SpAttack: number;
    SpDefense: number;
    Speed: number;
  };
  abilities?: { name: string; hidden: boolean }[];
  isFainted: boolean;
};

export type FightArenaProps = {
  myPokemon: PokemonFightData;
  setMyPokemon: (val: PokemonFightData) => void;
  opponent: PokemonFightData;
};
