import { Pokemon } from "./Pokemon";

export type PokemoneViewProps = {
  title: string;
  onPokemonClick: (event: string) => void;
  pokemons: Pokemon[];
};
