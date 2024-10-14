import React, { useEffect, useState } from "react";
import { SortBy, sortByOptions, ViewType } from "./consts";
import SearchBar from "../../../../Components/SearchBar/SearchBar";
import DropDown from "../../../../Components/DropDown/DropDown";
import {
  DropDownContainer,
  getDropdownStyle,
  HeaderContainer,
  TabAndSearchBarContainer,
} from "./styles";
import Tab from "./Tab/Tab";
import { HeaderPokemonViewProps } from "./types";
import { fetchPokemonData } from "../../../dataUtils";
import { Title } from "../../consts";

const HeaderPokemonView = ({
  setViewType,
  setPokemons,
  title,
}: HeaderPokemonViewProps) => {
  const [sortBy, setSortBy] = useState("");
  const [searchBy, setSearchBy] = useState("");

  const fetchPokemons = async () => {
    try {
      let username = "";
      if (title === Title.MY_POKEMONS) username = "roni23";
      const data = await fetchPokemonData(sortBy, searchBy, username);
      setPokemons(data);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, [sortBy, searchBy]);
  return (
    <HeaderContainer>
      <TabAndSearchBarContainer>
        <SearchBar placeHolder="Search Pokemon" onSearch={setSearchBy} />
        <Tab setTypeView={setViewType} />
      </TabAndSearchBarContainer>
      <DropDownContainer>
        <DropDown
          options={sortByOptions}
          value={sortBy}
          onChange={setSortBy}
          label="Sort By"
          style={getDropdownStyle(sortBy.length)}
        />
      </DropDownContainer>
    </HeaderContainer>
  );
};

export default HeaderPokemonView;
