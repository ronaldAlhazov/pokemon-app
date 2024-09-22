import React, { useEffect, useMemo, useState } from "react";
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
} from "../dataUtils";
import Table from "../../Components/Table/Table";
import { GridEventListener } from "@mui/x-data-grid";
import { Pokemon } from "./Pokemon";
import { getTableStyle, MainContainer } from "./styles";
import { CardProps } from "../../Components/Card/types";
import CardsView, { sortCards } from "./components/CradsView/CardsView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemoneViewProps } from "./types";

const PokemonView = ({ title, onPkemonClick }: PokemoneViewProps) => {
  const [searchBy, setSearchBy] = useState("");
  const [pokemonCards, setPokemonCards] = useState<CardProps[]>([]);
  const [clickedPokemon, setClickedPokemon] = useState("");
  const [sortBy, setSortBy] = useState({ col: "ID", order: sortType.ASC });
  const [viewOption, setViewOption] = useState<ViewType>(ViewType.TABLE);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemonData();
      setPokemons(data);
      setRows(getRows(data));
      setPokemonCards(createPokemonCards(data, onPkemonClick));
    };

    loadData();
  }, []);

  const pokemonMemoCards = useMemo(() => {
    return createPokemonCards(pokemons, onPkemonClick);
  }, [pokemonCards]);

  useEffect(() => {
    const filteredCards =
      searchBy.trim() === ""
        ? pokemonMemoCards
        : pokemonCards.filter((card) =>
            card.name.toLowerCase().includes(searchBy.toLowerCase())
          );
    const sortedCards = sortCards(filteredCards, sortBy);

    setPokemonCards(sortedCards);
  }, [searchBy, sortBy]);

  const filteredRows = rows.filter((row) => {
    if (searchBy.trim() === "") {
      return true;
    }
    return row.name.toLowerCase().includes(searchBy.toLowerCase());
  });

  const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
    onPkemonClick(params.row.name);
    //need to add for modal option
  };

  return (
    <BrowserRouter>
      <MainContainer>
        <Typography type={TypographyTypes.HEADING_LARGE_MEDIUM} label={title} />
        <HeaderPokemonView
          setSearchBy={setSearchBy}
          setSortOrder={setSortBy}
          viewType={viewOption}
          setViewType={setViewOption}
        />
        <Routes>
          <Route
            path="/table"
            element={
              <Table
                rows={filteredRows}
                cols={getCols()}
                handleRowClick={handleRowClick}
                style={getTableStyle}
                sortBy={sortBy}
                headerClassName={"theme--header"}
              />
            }
          />
          <Route path="/cards" element={<CardsView cards={pokemonCards} />} />
          <Route
            path="*"
            element={
              <Table
                rows={filteredRows}
                cols={getCols()}
                handleRowClick={handleRowClick}
                style={getTableStyle}
                sortBy={sortBy}
                headerClassName={"theme--header"}
              />
            }
          />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};

export default PokemonView;
