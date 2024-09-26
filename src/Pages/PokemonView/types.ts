import { Pokemon } from "./Pokemon";

export type PokemoneViewProps = {
  title: string;
  pokemons: Pokemon[];
  onFightClick: (id: number) => void;
};
