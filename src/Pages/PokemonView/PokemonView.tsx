import React, { useEffect, useState } from "react";
import Typography from "../../Components/Typography/Typography";
import { TypographyTypes } from "../../Components/Typography/consts";
import HeaderPokemonView from "./components/HeaderPokemonView/HeaderPokemonView";
import { ViewType } from "./components/HeaderPokemonView/consts";
import { sortType } from "../../Components/Table/consts";
import {
  fetchPokemonData,
  getCols,
  getRows,
  createPokemonCards,
} from "./dataUtils";
import Table from "../../Components/Table/Table";
import { GridEventListener } from "@mui/x-data-grid";
import { Pokemon } from "./Pokemon";
import { getTableStyle, MainContainer } from "./styles";
import { CardProps } from "../../Components/Card/types";
import CardsView from "./components/CradsView/CardsView";

type PokemoneViewProps = {
  title: string;
};

const PokemonView = ({ title }: PokemoneViewProps) => {
  const [searchBy, setSearchBy] = useState("");
  const [pokemonCards, setPokemonCards] = useState<CardProps[]>([]);

  const [isSearchButtonClicked, setIsSearchButtonClicked] = useState(false);
  const [sortBy, setSortBy] = useState({ col: "ID", order: sortType.ASC });
  const [viewOption, setViewOption] = useState<ViewType>(ViewType.TABLE);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemonData();
      setPokemons(data);
      setRows(getRows(data));
      setPokemonCards(createPokemonCards(data));
      console.log("on useEffect");
    };

    loadData();
  }, []);

  useEffect(() => {
    console.log(sortBy.col);
  }, [sortBy]);
  useEffect(() => {
    console.log(searchBy);
  }, [searchBy]);
  useEffect(() => {
    console.log(viewOption);
  }, [viewOption]);

  const filteredRows = rows.filter((row) => {
    if (searchBy.trim() === "") {
      return true;
    }
    return row.name.toLowerCase().includes(searchBy.toLowerCase());
  });

  const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
    alert(`Row clicked: ${params.row.name}`);
  };
  return (
    <MainContainer>
      <Typography type={TypographyTypes.HEADING_LARGE_MEDIUM} label={title} />
      <HeaderPokemonView
        setSearchBy={setSearchBy}
        setSortOrder={setSortBy}
        viewType={viewOption}
        setViewType={setViewOption}
      />
      {viewOption == ViewType.TABLE ? (
        <Table
          rows={filteredRows}
          cols={getCols()}
          handleRowClick={handleRowClick}
          style={getTableStyle}
          sortBy={sortBy}
          headerClassName={"theme--header"}
        />
      ) : (
        <CardsView cards={pokemonCards} />
      )}
    </MainContainer>
  );
};

export default PokemonView;
