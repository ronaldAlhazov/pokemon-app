import React, { useEffect } from "react";
import { sortByOptions, viewType } from "./consts";
import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";
import {
  DropDownContainer,
  getDropdownStyle,
  HeaderContainer,
  TabAndSearchBarContainer,
} from "./styles";
import Tab from "./Tab/Tab";
import { SxProps, Theme } from "@mui/material";

type HeaderPokemonViewProps = {
  searchBy: string;
  setSearchBy: (value: string) => void;
  isSearchButtonClicked: boolean;
  sortBy: string;
  setSortBy: (value: string) => void;
  viewType: viewType;
  setViewType: (viewType: viewType) => void;
};

const HeaderPokemonView = ({
  searchBy,
  setSearchBy,
  isSearchButtonClicked,
  sortBy,
  setSortBy,
  viewType,
  setViewType,
}: HeaderPokemonViewProps) => {
  useEffect(() => {
    console.log(viewType);
    console.log(sortBy);
  });
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
