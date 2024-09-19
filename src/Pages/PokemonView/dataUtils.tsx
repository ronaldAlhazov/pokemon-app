import { GridRenderCellParams } from "@mui/x-data-grid";
import { TableCol } from "../../Components/Table/types";
import { Pokemon } from "./Pokemon";
import { CardProps } from "../../Components/Card/types";

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
    hp: pokemon.base?.HP ? `${pokemon.base?.HP} HP` : "N/A",
    Power: pokemon.base?.["Sp. Attack"]
      ? `Power level ${pokemon.base?.["Sp. Attack"]}`
      : "N/A",
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
      <img
        src={params.value as string}
        alt={params.row.name}
        style={{ width: "50px", height: "50px" }}
      />
    ),
  },
  { title: "Pokemon name", field: "name", width: 150 },
  { title: "ID", field: "id", width: 90 },
  {
    title: "Description",
    field: "description",
    width: 544,
    flex: 2,
    minWidth: 300,
  },
  { title: "Power level", field: "Power", width: 130 },
  { title: "HP level", field: "hp", width: 119 },
];

export const createPokemonCards = (pokemonData: Pokemon[]): CardProps[] => {
  return pokemonData.map((pokemon) => ({
    id: `#${pokemon.id.toString().padStart(3, "0")}`,
    img: pokemon.image.hires,
    name: pokemon.name.english,
    power: pokemon.base?.["Sp. Attack"] ? pokemon.base.Attack : 0,
    onCardClick: (val: string) => {
      console.log(val);
    },
  }));
};
