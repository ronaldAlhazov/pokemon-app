import { sortType } from "../../../../Components/Table/consts";
import { ViewType } from "./consts";

export type HeaderPokemonViewProps = {
  setSearchBy: (value: string) => void;
  setSortOrder: (value: { col: string; order: sortType }) => void;
  viewType: ViewType;
  setViewType: (viewType: ViewType) => void;
};
