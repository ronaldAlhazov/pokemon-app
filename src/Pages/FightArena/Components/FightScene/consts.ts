import { FightType } from "../../../../Components/FightCard/consts";
import { FightCardProps } from "../../../../Components/FightCard/types";
import { FightingData } from "./types";
export enum Turn {
  MY_POKEMON = "my pokemon",
  OPPONENT = "opponent",
}
export const initialCard: FightCardProps = {
  id: "",
  img: "",
  name: "",
  power: 0,
  fightType: FightType.ME,
  startHealth: 0,
  currentHealth: 0,
  minHealth: 0,
  border: "none",
  isWinner: "false",
};
export const MAX_CATCH_ATTEMPTS = 3;
export const initialFightingData: FightingData = {
  id: 0,
  name: "",
  currentHP: 0,
  isFainted: false,
  catchAttempts: 0,
};
export const typeAdvantageChart: Record<
  string,
  { strongAgainst: string[]; weakAgainst: string[] }
> = {
  Bug: {
    strongAgainst: ["Grass", "Dark", "Psychic"],
    weakAgainst: ["Fire", "Flying", "Rock"],
  },
  Dark: {
    strongAgainst: ["Ghost", "Psychic"],
    weakAgainst: ["Bug", "Fairy", "Fighting"],
  },
  Dragon: {
    strongAgainst: ["Dragon"],
    weakAgainst: ["Dragon", "Fairy", "Ice"],
  },
  Electric: { strongAgainst: ["Flying", "Water"], weakAgainst: ["Ground"] },
  Fairy: {
    strongAgainst: ["Fighting", "Dark", "Dragon"],
    weakAgainst: ["Poison", "Steel"],
  },
  Fighting: {
    strongAgainst: ["Dark", "Ice", "Normal", "Rock", "Steel"],
    weakAgainst: ["Fairy", "Flying", "Psychic"],
  },
  Fire: {
    strongAgainst: ["Bug", "Grass", "Ice", "Steel"],
    weakAgainst: ["Ground", "Rock", "Water"],
  },
  Flying: {
    strongAgainst: ["Bug", "Fighting", "Grass"],
    weakAgainst: ["Electric", "Ice", "Rock"],
  },
  Ghost: {
    strongAgainst: ["Ghost", "Psychic"],
    weakAgainst: ["Dark", "Ghost"],
  },
  Grass: {
    strongAgainst: ["Ground", "Rock", "Water"],
    weakAgainst: ["Bug", "Fire", "Flying", "Ice", "Poison"],
  },
  Ground: {
    strongAgainst: ["Electric", "Fire", "Poison", "Rock", "Steel"],
    weakAgainst: ["Grass", "Ice", "Water"],
  },
  Ice: {
    strongAgainst: ["Dragon", "Flying", "Grass", "Ground"],
    weakAgainst: ["Fighting", "Fire", "Rock", "Steel"],
  },
  Normal: { strongAgainst: [], weakAgainst: ["Fighting"] },
  Poison: {
    strongAgainst: ["Fairy", "Grass"],
    weakAgainst: ["Ground", "Psychic"],
  },
  Psychic: {
    strongAgainst: ["Fighting", "Poison"],
    weakAgainst: ["Bug", "Dark", "Ghost"],
  },
  Rock: {
    strongAgainst: ["Bug", "Fire", "Flying", "Ice"],
    weakAgainst: ["Fighting", "Grass", "Ground", "Steel", "Water"],
  },
  Steel: {
    strongAgainst: ["Fairy", "Ice", "Rock"],
    weakAgainst: ["Fighting", "Fire", "Ground"],
  },
  Water: {
    strongAgainst: ["Fire", "Ground", "Rock"],
    weakAgainst: ["Electric", "Grass"],
  },
};
