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
import {
  getTableStyle,
  MainContainer,
  modalStyle,
  TitleContainer,
} from "./styles";
import { PokemoneViewProps } from "./types";
import CardsGrid from "../../Components/CardsGrid/CardsGrid";
import { Box, Button, Modal } from "@mui/material";
import ModalCard from "../../Components/ModalCard/ModalCard";

const PokemonView = ({
  pokemons,
  title,
  onFightClick,
  setPokemons,
}: PokemoneViewProps) => {
  const [viewOption, setViewOption] = useState<ViewType>(ViewType.TABLE);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchPokemonData();
    };
    loadData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRows = await getRows(pokemons, title);
        setRows(fetchedRows);
      } catch (error) {
        console.error("Error fetching rows:", error);
      }
    };

    fetchData();
  }, [pokemons, title]);

  const handleRowClick: GridEventListener<"rowClick"> = (params, event) => {
    const clickedPokemon = pokemons.find(
      (pokemon) => pokemon.id === params.row.id
    );
    setSelectedPokemon(clickedPokemon || null);
    setModalOpen(true);
  };
  const onPokemonClick = (val: string) => {
    const clickedPokemon = pokemons.find(
      (pokemon) => pokemon.nameEnglish === val
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
        setPokemons={setPokemons}
        setViewType={setViewOption}
        title={title}
      />

      {viewOption == ViewType.TABLE ? (
        <div style={{ height: "75vh" }}>
          <Table
            rows={rows}
            cols={getCols()}
            handleRowClick={handleRowClick}
            style={getTableStyle}
            headerClassName={"theme--header"}
            noRowMessage="No Pokemons were found"
          />
        </div>
      ) : (
        <div style={{ height: "100%" }}>
          <CardsGrid cards={createPokemonCards(pokemons, onPokemonClick)} />
        </div>
      )}
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          {selectedPokemon && (
            <ModalCard
              id={`${selectedPokemon.id}`}
              img={selectedPokemon.image.hires}
              name={selectedPokemon.nameEnglish ?? ""}
              description={selectedPokemon.description}
              hight={2}
              weight={15.2}
              category={selectedPokemon.species.split(" ")[0]}
              abilities={selectedPokemon.profile.ability[0][0]}
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
