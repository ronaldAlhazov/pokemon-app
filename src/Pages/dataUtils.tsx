import { GridRenderCellParams } from "@mui/x-data-grid";
import { TableCol } from "../Components/Table/types";
import { Language, Pokemon, PokemonType, Stats } from "./PokemonView/Pokemon";
import { CardProps } from "../Components/Card/types";
import { Circle, CircleContainer } from "../Components/Image/styles";
import { sortType } from "../Components/Table/consts";
import { PokemonFightData } from "./FightArena/types";
import { Title } from "./PokemonView/consts";
import Typography from "../Components/Typography/Typography";
import { TypographyTypes } from "../Components/Typography/consts";
import { ColStyle } from "./PokemonView/styles";

export const fetchPokemonData = async (
  sortBy?: string,
  filter?: string,
  username?: string
): Promise<Pokemon[]> => {
  const params: URLSearchParams = new URLSearchParams();

  if (sortBy) {
    params.append("sortBy", sortBy);
  }

  if (filter) {
    params.append("filter", filter);
  }
  if (username) {
    params.append("username", username);
  }

  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/getPokemons?${params.toString()}`
  );

  const data: (Omit<Pokemon, "stats"> & { base: Stats })[] =
    await response.json();

  const formattedData = data.map((pokemon) => ({
    ...pokemon,
    stats: pokemon.base,
  }));
  return formattedData;
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
  {
    title: "Pokemon name",
    field: "name",
    width: 150,
  },
  {
    title: "ID",
    field: "id",
    width: 90,
    renderCell: (params) => {
      return (
        <ColStyle>
          <Typography
            label={params.value ?? ""}
            type={TypographyTypes.BODY_REGULAR}
          />
        </ColStyle>
      );
    },
  },
  {
    title: "Description",
    field: "description",
    width: 500,
    flex: 2,
    minWidth: 300,
    renderCell: (params) => {
      return (
        <ColStyle>
          <Typography
            label={params.value ?? ""}
            type={TypographyTypes.BODY_REGULAR}
          />
        </ColStyle>
      );
    },
  },
  {
    title: "Power level",
    field: "Power",
    width: 130,
    renderCell: (params) => {
      return (
        <ColStyle>
          <Typography
            label={
              params.value !== null && params.value !== undefined
                ? `power level ${params.value}`
                : "N/A"
            }
            type={TypographyTypes.BODY_REGULAR}
          />
        </ColStyle>
      );
    },
  },
  {
    title: "HP level",
    field: "hp",
    width: 119,
    renderCell: (params) => {
      return (
        <ColStyle>
          <Typography
            label={`${params.value} HP`}
            type={TypographyTypes.BODY_REGULAR}
          />
        </ColStyle>
      );
    },
  },
];
export const getRows = async (data: Pokemon[], title: Title) => {
  const myPokemons = await getMyPokemons();

  return data.map((pokemon) => {
    const belongsToMe = myPokemons.some(
      (myPokemon) => myPokemon.id === pokemon.id
    );

    return {
      id: pokemon.id,
      name: (
        <ColStyle>
          <Typography
            label={pokemon.nameEnglish ?? ""}
            type={TypographyTypes.HEADING_MEDIUM_REGULAR}
          />
          {title === Title.ALL_POKEMONS && belongsToMe && (
            <img
              src={`${process.env.PUBLIC_URL}/favicon.ico`}
              alt="Pokéball"
              style={{
                width: 16,
                height: 16,
                marginLeft: 4,
                marginRight: 4,
              }}
            />
          )}
        </ColStyle>
      ),
      hp: pokemon.stats?.HP || null,
      Power: pokemon.stats?.Attack || null,
      description: pokemon.description,
      avatar: pokemon.image.hires,
    };
  });
};

export const getMyPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/getPokemons?username=roni23`
  );
  const data: (Omit<Pokemon, "stats"> & { base: Stats })[] =
    await response.json();

  const formattedData = data.map((pokemon) => ({
    ...pokemon,
    stats: pokemon.base,
  }));

  return formattedData;
};

export const getMyPokemonsFightingData = async (): Promise<
  PokemonFightData[]
> => {
  try {
    const storedPokemons = await getMyPokemons();
    return storedPokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.nameEnglish || "",
      type: pokemon.type,
      imgThumbnails: pokemon.image.thumbnail,
      imgHires: pokemon.image.hires,
      stats: {
        HP: pokemon.stats.HP,
        Attack: pokemon.stats.Attack,
        Defense: pokemon.stats.Defense,
        SpAttack: pokemon.stats.SpAttack,
        SpDefense: pokemon.stats.SpDefense,
        Speed: pokemon.stats.Speed,
      },
      abilities: pokemon.profile.ability.map(([name, hidden]) => ({
        name,
        hidden: hidden === "true",
      })),
      isFainted: false,
    }));
  } catch (error) {
    console.error("Error fetching fighting data:", error);
    return [];
  }
};
export const getOpponent = async (
  username: string
): Promise<PokemonFightData> => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/getOpponent?username=${username}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch opponent Pokémon");
    }
    const data: Omit<Pokemon, "stats"> & { base: Stats } =
      await response.json();

    const opponentPokemon: Pokemon = {
      ...data,
      stats: data.base,
    };

    return getOpponentData(opponentPokemon);
  } catch (error) {
    console.error("Error fetching opponent:", error);
    throw new Error("Error fetching opponent data");
  }
};
export const getOpponentData = (pokemon: Pokemon): PokemonFightData => {
  return {
    id: pokemon.id,
    name: pokemon.nameEnglish || "",
    type: pokemon.type,
    imgThumbnails: pokemon.image.thumbnail,
    imgHires: pokemon.image.hires,
    stats: {
      HP: pokemon.stats?.HP ?? "N/A",
      Attack: pokemon.stats?.Attack ?? "N/A",
      Defense: pokemon.stats?.Defense ?? "N/A",
      SpAttack: pokemon.stats ? (pokemon.stats.SpAttack ?? 0) : 0,
      SpDefense: pokemon.stats ? (pokemon.stats.SpDefense ?? 0) : 0,
      Speed: pokemon.stats?.Speed ?? "N/A",
    },
    abilities: pokemon.profile.ability.map(([name, hidden]) => ({
      name,
      hidden: hidden === "true",
    })),
    isFainted: false,
  };
};

export const createPokemonCards = (
  pokemonData: Pokemon[],
  setClickedPokemon: (card: string) => void
): CardProps[] => {
  return pokemonData.map((pokemon) => ({
    id: `#${pokemon.id.toString().padStart(3, "0")}`,
    img: pokemon.image.hires,
    name: pokemon.nameEnglish || "Unknown",
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
      valueA = a.nameEnglish;
      valueB = b.nameEnglish;
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
