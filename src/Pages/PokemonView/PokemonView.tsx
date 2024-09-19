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
import CardsView, { sortCards } from "./components/CradsView/CardsView";

type PokemoneViewProps = {
  title: string;
};

const PokemonView = ({ title }: PokemoneViewProps) => {
  const [searchBy, setSearchBy] = useState("");
  const [pokemonCards, setPokemonCards] = useState<CardProps[]>([]);
  const [defaultCards, setDefaultCards] = useState<CardProps[]>([]);
  const [clickedPokemon, setClickedPokemon] = useState("");
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
      setPokemonCards(createPokemonCards(data, setClickedPokemon));
    };

    loadData();
  }, []);

  useEffect(() => {
    const filteredCards =
      searchBy.trim() === ""
        ? createPokemonCards(pokemons, setClickedPokemon)
        : pokemonCards.filter((card) =>
            card.name.toLowerCase().includes(searchBy.toLowerCase())
          );
    const sortedCards = filteredCards.sort((a, b) => {
      const { col, order } = sortBy;
      const key = col.toLowerCase() as keyof CardProps;
      const valueA = a[key];
      const valueB = b[key];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return order === sortType.ASC
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return order === sortType.ASC ? valueA - valueB : valueB - valueA;
      }
      return 0;
    });

    setPokemonCards(sortedCards);
  }, [searchBy, sortBy]);

  const filteredRows = rows.filter((row) => {
    if (searchBy.trim() === "") {
      return true;
    }
    return row.name.toLowerCase().includes(searchBy.toLowerCase());
  });

  const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
    setClickedPokemon(params.row.name);
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
