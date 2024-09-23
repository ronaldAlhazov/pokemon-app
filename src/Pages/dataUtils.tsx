import { GridRenderCellParams } from "@mui/x-data-grid";
import { TableCol } from "../Components/Table/types";
import { Pokemon } from "./PokemonView/Pokemon";
import { CardProps } from "../Components/Card/types";
import { colors } from "../global-styles";
import { Circle, CircleContainer } from "../Components/Image/styles";

export const fetchPokemonData = async (): Promise<Pokemon[]> => {
  const response = await fetch("/pokemon.json");
  const data: Pokemon[] = await response.json();
  return data;
};
export const getRows = (data: Pokemon[]) => {
  return data.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name.english,
    ID: pokemon.id,
    hp: pokemon.base?.HP ? pokemon.base?.HP : null,
    Power: pokemon.base?.["Sp. Attack"] ? pokemon.base?.["Sp. Attack"] : null,
    description: pokemon.description,
    avatar: pokemon.image.hires,
  }));
};

export const getCols = (): TableCol[] => [
  {
    title: "",
    field: "avatar",
    width: 70,
    renderCell: (params: GridRenderCellParams) => (
      <CircleContainer>
        <Circle>
          <img
            src={params.value as string}
            alt={params.row.name}
            style={{ width: "44px", height: "44px" }}
          />
        </Circle>
      </CircleContainer>
    ),
  },
  { title: "Pokemon name", field: "name", width: 150 },
  { title: "ID", field: "id", width: 90 },
  {
    title: "Description",
    field: "description",
    width: 500,
    flex: 2,
    minWidth: 300,
  },
  {
    title: "Power level",
    field: "Power",
    width: 130,
    renderCell: (params) => {
      return params.value !== null && params.value !== undefined
        ? `power level ${params.value}`
        : "N/A";
    },
  },
  {
    title: "HP level",
    field: "hp",
    width: 119,
    renderCell: (params) => `${params.value} HP`,
  },
];

export const createPokemonCards = (
  pokemonData: Pokemon[],
  setClickedPokemon: (card: string) => void
): CardProps[] => {
  return pokemonData.map((pokemon) => ({
    id: `#${pokemon.id.toString().padStart(3, "0")}`,
    img: pokemon.image.hires,
    name: pokemon.name.english,
    power: pokemon.base?.["Sp. Attack"] ? pokemon.base.Attack : undefined,
    hp: pokemon.base?.HP ? pokemon.base?.HP : undefined,
    onCardClick: (val: string) => {
      setClickedPokemon(val);
    },
  }));
};
