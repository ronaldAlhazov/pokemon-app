import { useEffect, useMemo, useState } from "react";
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
  sortCards,
} from "../dataUtils";
import Table from "../../Components/Table/Table";
import { GridEventListener } from "@mui/x-data-grid";
import { Pokemon } from "./Pokemon";
import { getTableStyle, MainContainer, TitleContainer } from "./styles";
import { PokemoneViewProps } from "./types";
import CardsGrid from "../../Components/CardsGrid/CardsGrid";

const PokemonView = ({ title, onPokemonClick }: PokemoneViewProps) => {
  const [searchBy, setSearchBy] = useState("");
  const [sortBy, setSortBy] = useState({ col: "ID", order: sortType.ASC });
  const [viewOption, setViewOption] = useState<ViewType>(ViewType.TABLE);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemonData();
      setPokemons(data);
      setRows(getRows(data));
    };

    loadData();
  }, []);

  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) =>
      pokemon.name.english?.toLowerCase().includes(searchBy.toLowerCase())
    );
  }, [pokemons, searchBy]);

  const sortedPokemons = useMemo(() => {
    return sortCards(filteredPokemons, sortBy);
  }, [filteredPokemons, sortBy]);

  const filteredRows = useMemo(() => {
    return rows.filter((row) =>
      row.name.toLowerCase().includes(searchBy.toLowerCase())
    );
  }, [rows, searchBy]);
  const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
    onPokemonClick(params.row.name);
    //need to add for modal option
  };

  return (
    <MainContainer>
      <TitleContainer>
        <Typography type={TypographyTypes.HEADING_LARGE_MEDIUM} label={title} />
      </TitleContainer>
      <HeaderPokemonView
        setSearchBy={setSearchBy}
        setSortOrder={setSortBy}
        viewType={viewOption}
        setViewType={setViewOption}
      />

      {viewOption == ViewType.TABLE ? (
        <div style={{ height: "80vh" }}>
          <Table
            rows={getRows(filteredPokemons)}
            cols={getCols()}
            handleRowClick={handleRowClick}
            style={getTableStyle}
            sortBy={sortBy}
            headerClassName={"theme--header"}
          />
        </div>
      ) : (
        <CardsGrid cards={createPokemonCards(sortedPokemons, onPokemonClick)} />
      )}
    </MainContainer>
  );
};

export default PokemonView;
