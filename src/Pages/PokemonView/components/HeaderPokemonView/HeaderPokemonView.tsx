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
import { sortType } from "../../../../Components/Table/consts";

const HeaderPokemonView = ({
  setSearchBy,
  setSortOrder,
  viewType,
  setViewType,
}: HeaderPokemonViewProps) => {
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    switch (sortBy) {
      case SortBy.NAME_AZ:
        setSortOrder({ col: "name", order: sortType.ASC });
        break;
      case SortBy.NAME_ZA:
        setSortOrder({ col: "name", order: sortType.DESC });
        break;
      case SortBy.POWER_HL:
        setSortOrder({ col: "power", order: sortType.DESC });
        break;
      case SortBy.POWER_LH:
        setSortOrder({ col: "power", order: sortType.ASC });
        break;
      case SortBy.HP_HL:
        setSortOrder({ col: "hp", order: sortType.DESC });
        break;
      case SortBy.HP_LH:
        setSortOrder({ col: "hp", order: sortType.ASC });
        break;
      default:
        setSortOrder({ col: "", order: sortType.ASC });
    }
  }, [sortBy]);
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
