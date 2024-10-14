import { sortType } from "../../../../Components/Table/consts";
import { Title } from "../../consts";
import { Pokemon } from "../../Pokemon";
import { ViewType } from "./consts";

export type HeaderPokemonViewProps = {
  setViewType: (viewType: ViewType) => void;
  setPokemons: (pokemons: Pokemon[]) => void;
  title: Title;
};
export type SortOptionType = {
  title: string;
  value: sortType;
};
