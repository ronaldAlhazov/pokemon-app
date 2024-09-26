import { GridRenderCellParams } from "@mui/x-data-grid";
import { TableCol } from "../Components/Table/types";
import { Language, Pokemon, PokemonType, Stats } from "./PokemonView/Pokemon";
import { CardProps } from "../Components/Card/types";
import { Circle, CircleContainer } from "../Components/Image/styles";
import { sortType } from "../Components/Table/consts";
import { PokemonFightData } from "./FightArena/types";

export const fetchPokemonData = async (): Promise<Pokemon[]> => {
  const cachedData = localStorage.getItem("pokemonData");
  if (cachedData) {
    return JSON.parse(cachedData) as Pokemon[];
  } else {
    const response = await fetch("/pokemon.json");
    const data: (Omit<Pokemon, "stats"> & { base: Stats })[] =
      await response.json();

    const formattedData = data.map((pokemon) => ({
      ...pokemon,
      stats: pokemon.base,
    }));

    localStorage.setItem("pokemonData", JSON.stringify(formattedData));

    return formattedData;
  }
};
export const getRows = (data: Pokemon[]) => {
  return data.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name.english,
    hp: pokemon.stats?.HP ? pokemon.stats?.HP : null,
    Power: pokemon.stats?.["Sp. Attack"] ? pokemon.stats.Attack : null,
    description: pokemon.description,
    avatar: pokemon.image.hires,
  }));
};
export const getMyPokemons = (data: Pokemon[]) => {
  return data.filter((pokemon) => pokemon.belongsToMe === true);
};

export const getMyPokemonsFightingData = (
  myPokemons: Pokemon[]
): PokemonFightData[] => {
  return myPokemons.map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.name[Language.ENGLISH] || "",
    type: pokemon.type,
    imgThumbnails: pokemon.image.thumbnail,
    imgHires: pokemon.image.hires,
    stats: {
      HP: pokemon.stats.HP,
      Attack: pokemon.stats.Attack,
      Defense: pokemon.stats.Defense,
      SpAttack: pokemon.stats["Sp. Attack"],
      SpDefense: pokemon.stats["Sp. Defense"],
      Speed: pokemon.stats.Speed,
    },
    abilities: pokemon.profile.ability.map(([name, hidden]) => ({
      name,
      hidden: hidden === "true",
    })),
    isFainted: false,
  }));
};
export const getOpponent = (pokemons: Pokemon[]): PokemonFightData => {
  const availablePokemons = pokemons.filter((pokemon) => !pokemon.belongsToMe);

  let pokemon: Pokemon | undefined;

  do {
    const randomIndex = Math.floor(Math.random() * availablePokemons.length);
    const candidate = availablePokemons[randomIndex];

    if (candidate.stats && Object.keys(candidate.stats).length > 0) {
      pokemon = candidate;
    }
  } while (!pokemon);
  return getOpponentData(pokemon);
};
export const getOpponentData = (pokemon: Pokemon): PokemonFightData => {
  return {
    id: pokemon.id,
    name: pokemon.name[Language.ENGLISH] || "",
    type: pokemon.type,
    imgThumbnails: pokemon.image.thumbnail,
    imgHires: pokemon.image.hires,
    stats: {
      HP: pokemon.stats?.HP ?? "N/A",
      Attack: pokemon.stats?.Attack ?? "N/A",
      Defense: pokemon.stats?.Defense ?? "N/A",
      SpAttack: pokemon.stats ? (pokemon.stats["Sp. Attack"] ?? 0) : 0,
      SpDefense: pokemon.stats ? (pokemon.stats["Sp. Defense"] ?? 0) : 0,
      Speed: pokemon.stats?.Speed ?? "N/A",
    },
    abilities: pokemon.profile.ability.map(([name, hidden]) => ({
      name,
      hidden: hidden === "true",
    })),
    isFainted: false,
  };
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
    name: pokemon.name[Language.ENGLISH] || "Unknown",
    power: pokemon.stats?.Attack ? pokemon.stats.Attack : undefined,
    hp: pokemon.stats?.HP ? pokemon.stats?.HP : undefined,
    onCardClick: (val: string) => {
      setClickedPokemon(val);
    },
  }));
};
export const sortCards = (
  cards: Pokemon[],
  sortBy: { col: string; order: string }
) => {
  return cards.sort((a, b) => {
    const { col, order } = sortBy;

    let valueA: string | number | undefined;
    let valueB: string | number | undefined;

    if (col === "name") {
      valueA = a.name[Language.ENGLISH];
      valueB = b.name[Language.ENGLISH];
    } else if (col === "power" || col === "Power") {
      valueA = a.stats?.Attack;
      valueB = b.stats?.Attack;
    } else if (col === "hp") {
      valueA = a.stats?.HP;
      valueB = b.stats?.HP;
    } else {
      valueA = a.id;
      valueB = b.id;
    }

    if (valueA === undefined && valueB === undefined) {
      return 0;
    } else if (valueA === undefined) {
      return 1;
    } else if (valueB === undefined) {
      return -1;
    }

    if (typeof valueA === "string" && typeof valueB === "string") {
      return order === sortType.ASC
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    } else if (typeof valueA === "number" && typeof valueB === "number") {
      return order === sortType.ASC ? valueA - valueB : valueB - valueA;
    }

    return 0;
  });
};
