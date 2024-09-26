import { Title } from "./consts";
import { Pokemon } from "./Pokemon";

export type PokemoneViewProps = {
  title: Title;
  pokemons: Pokemon[];
  onFightClick: (id: number) => void;
};
