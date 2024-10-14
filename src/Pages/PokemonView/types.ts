import { Title } from "./consts";
import { Pokemon } from "./Pokemon";

export type PokemoneViewProps = {
  title: Title;
  pokemons: Pokemon[];
  setPokemons: (pokemons: Pokemon[]) => void;
  onFightClick: (id: number) => void;
};
