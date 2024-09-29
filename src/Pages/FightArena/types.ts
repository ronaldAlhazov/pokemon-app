import { PokemonType } from "../PokemonView/Pokemon";

export type PokemonFightData = {
  id: number;
  name: string;
  type: PokemonType[];
  imgThumbnails: string;
  imgHires: string;
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
  pokemon: PokemonFightData;
  opponent: PokemonFightData;
  setOpponent: React.Dispatch<React.SetStateAction<PokemonFightData>>;
  addToMyPokemon: (id: number) => void;
};
