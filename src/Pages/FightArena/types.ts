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
  myPokemons: PokemonFightData[];
  pokemon: PokemonFightData;
  opponent: PokemonFightData;
  addToMyPokemon: (id: number) => void;
};
