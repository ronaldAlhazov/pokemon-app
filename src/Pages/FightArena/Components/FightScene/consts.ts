import { FightType } from "../../../../Components/FightCard/consts";
import { FightCardProps } from "../../../../Components/FightCard/types";
import { PokemonType } from "../../../PokemonView/Pokemon";
import { PokemonFightData } from "../../types";
import { FightingData } from "./types";
export enum Turn {
  MY_POKEMON = "my pokemon",
  OPPONENT = "opponent",
}

export const MAX_CATCH_ATTEMPTS = 3;
export const initialFightingData: FightingData = {
  id: 0,
  name: "",
  img: "",
  HP: 0,
  type: [PokemonType.BUG],
  Attack: 0,
  Defense: 0,
  SpAttack: 0,
  SpDefense: 0,
  Speed: 0,
  currentHP: 0,
  isFainted: false,
  catchAttempts: 0,
};

export const initialPokemonFightingData: PokemonFightData = {
  id: 0,
  name: "",
  type: [PokemonType.BUG],
  imgThumbnails: "",
  imgHires: "",
  stats: {
    HP: 0,
    Attack: 0,
    Defense: 0,
    SpAttack: 0,
    SpDefense: 0,
    Speed: 0,
  },

  isFainted: false,
};

export const typeAdvantageChart: Record<
  PokemonType,
  { strongAgainst: PokemonType[]; weakAgainst: PokemonType[] }
> = {
  [PokemonType.BUG]: {
    strongAgainst: [PokemonType.GRASS, PokemonType.DARK, PokemonType.PSYCHIC],
    weakAgainst: [PokemonType.FIRE, PokemonType.FLYING, PokemonType.ROCK],
  },
  [PokemonType.DARK]: {
    strongAgainst: [PokemonType.GHOST, PokemonType.PSYCHIC],
    weakAgainst: [PokemonType.BUG, PokemonType.FAIRY, PokemonType.FIGHTING],
  },
  [PokemonType.DRAGON]: {
    strongAgainst: [PokemonType.DRAGON],
    weakAgainst: [PokemonType.DRAGON, PokemonType.FAIRY, PokemonType.ICE],
  },
  [PokemonType.ELECTRIC]: {
    strongAgainst: [PokemonType.FLYING, PokemonType.WATER],
    weakAgainst: [PokemonType.GROUND],
  },
  [PokemonType.FAIRY]: {
    strongAgainst: [PokemonType.FIGHTING, PokemonType.DARK, PokemonType.DRAGON],
    weakAgainst: [PokemonType.POISON, PokemonType.STEEL],
  },
  [PokemonType.FIGHTING]: {
    strongAgainst: [
      PokemonType.DARK,
      PokemonType.ICE,
      PokemonType.NORMAL,
      PokemonType.ROCK,
      PokemonType.STEEL,
    ],
    weakAgainst: [PokemonType.FAIRY, PokemonType.FLYING, PokemonType.PSYCHIC],
  },
  [PokemonType.FIRE]: {
    strongAgainst: [
      PokemonType.BUG,
      PokemonType.GRASS,
      PokemonType.ICE,
      PokemonType.STEEL,
    ],
    weakAgainst: [PokemonType.GROUND, PokemonType.ROCK, PokemonType.WATER],
  },
  [PokemonType.FLYING]: {
    strongAgainst: [PokemonType.BUG, PokemonType.FIGHTING, PokemonType.GRASS],
    weakAgainst: [PokemonType.ELECTRIC, PokemonType.ICE, PokemonType.ROCK],
  },
  [PokemonType.GHOST]: {
    strongAgainst: [PokemonType.GHOST, PokemonType.PSYCHIC],
    weakAgainst: [PokemonType.DARK, PokemonType.GHOST],
  },
  [PokemonType.GRASS]: {
    strongAgainst: [PokemonType.GROUND, PokemonType.ROCK, PokemonType.WATER],
    weakAgainst: [
      PokemonType.BUG,
      PokemonType.FIRE,
      PokemonType.FLYING,
      PokemonType.ICE,
      PokemonType.POISON,
    ],
  },
  [PokemonType.GROUND]: {
    strongAgainst: [
      PokemonType.ELECTRIC,
      PokemonType.FIRE,
      PokemonType.POISON,
      PokemonType.ROCK,
      PokemonType.STEEL,
    ],
    weakAgainst: [PokemonType.GRASS, PokemonType.ICE, PokemonType.WATER],
  },
  [PokemonType.ICE]: {
    strongAgainst: [
      PokemonType.DRAGON,
      PokemonType.FLYING,
      PokemonType.GRASS,
      PokemonType.GROUND,
    ],
    weakAgainst: [
      PokemonType.FIGHTING,
      PokemonType.FIRE,
      PokemonType.ROCK,
      PokemonType.STEEL,
    ],
  },
  [PokemonType.NORMAL]: {
    strongAgainst: [],
    weakAgainst: [PokemonType.FIGHTING],
  },
  [PokemonType.POISON]: {
    strongAgainst: [PokemonType.FAIRY, PokemonType.GRASS],
    weakAgainst: [PokemonType.GROUND, PokemonType.PSYCHIC],
  },
  [PokemonType.PSYCHIC]: {
    strongAgainst: [PokemonType.FIGHTING, PokemonType.POISON],
    weakAgainst: [PokemonType.BUG, PokemonType.DARK, PokemonType.GHOST],
  },
  [PokemonType.ROCK]: {
    strongAgainst: [
      PokemonType.BUG,
      PokemonType.FIRE,
      PokemonType.FLYING,
      PokemonType.ICE,
    ],
    weakAgainst: [
      PokemonType.FIGHTING,
      PokemonType.GRASS,
      PokemonType.GROUND,
      PokemonType.STEEL,
      PokemonType.WATER,
    ],
  },
  [PokemonType.STEEL]: {
    strongAgainst: [PokemonType.FAIRY, PokemonType.ICE, PokemonType.ROCK],
    weakAgainst: [PokemonType.FIGHTING, PokemonType.FIRE, PokemonType.GROUND],
  },
  [PokemonType.WATER]: {
    strongAgainst: [PokemonType.FIRE, PokemonType.GROUND, PokemonType.ROCK],
    weakAgainst: [PokemonType.ELECTRIC, PokemonType.GRASS],
  },
};
