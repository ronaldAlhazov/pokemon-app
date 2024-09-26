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
import { Pokemon, PokemonType } from "./Pokemon";
import { getTableStyle, MainContainer, TitleContainer } from "./styles";
import { PokemoneViewProps } from "./types";
import CardsGrid from "../../Components/CardsGrid/CardsGrid";
import { Box, Button, Modal } from "@mui/material";
import ModalCard from "../../Components/ModalCard/ModalCard";

const PokemonView = ({ pokemons, title, onFightClick }: PokemoneViewProps) => {
  const [searchBy, setSearchBy] = useState("");
  const [sortBy, setSortBy] = useState({ col: "ID", order: sortType.ASC });
  const [viewOption, setViewOption] = useState<ViewType>(ViewType.TABLE);
  const [rows, setRows] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemonData();
      setRows(getRows(pokemons));
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
    const clickedPokemon = filteredPokemons.find(
      (pokemon) => pokemon.name.english === params.row.name
    );
    setSelectedPokemon(clickedPokemon || null);
    setModalOpen(true);
  };
  const onPokemonClick = (val: string) => {
    const clickedPokemon = filteredPokemons.find(
      (pokemon) => pokemon.name.english === val
    );
    setSelectedPokemon(clickedPokemon || null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPokemon(null);
  };
  const onStartFightButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    onFightClick(selectedPokemon?.id ?? 0);
    setModalOpen(false);
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
        <div style={{ height: "75vh" }}>
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
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {selectedPokemon && (
            <ModalCard
              id={`${selectedPokemon.id}`}
              img={selectedPokemon.image.hires}
              name={selectedPokemon.name?.english ?? ""}
              description={selectedPokemon.description}
              hight={2}
              weight={15.2}
              category={selectedPokemon.species.split(" ")[0]}
              abilities={"aa"}
              onStartFightButton={onStartFightButton}
              onClose={setModalOpen}
            />
          )}
        </Box>
      </Modal>
    </MainContainer>
  );
};

export default PokemonView;
