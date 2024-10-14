import { DropdownOption } from "../../../../Components/DropDown/types";
import { PokemonFightData } from "../../types";

export type FightArenaHeaderProps = {
  setMyPokemon: (val: PokemonFightData) => void;
  isMatchStarted: boolean;
  selectedPokemon: PokemonFightData;
};
