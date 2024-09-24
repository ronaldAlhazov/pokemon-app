import { Dispatch } from "react";
import { PokemonFightData } from "../../types";
import { MAX_CATCH_ATTEMPTS, typeAdvantageChart } from "./consts";
import { FightingData } from "./types";
import { PokemonType } from "../../../PokemonView/Pokemon";
const checkAttackMiss = (): boolean => {
  const missChance = 0.05;
  return Math.random() < missChance;
};
const getRandomFactor = (): number => {
  const factor = Math.random() * 0.6;
  return factor + 0.7;
};

const getTypeMultiplier = (
  attackerTypes: PokemonType[],
  defenderTypes: PokemonType[]
): number => {
  let multiplier = 1;

  for (const attackerType of attackerTypes) {
    for (const defenderType of defenderTypes) {
      const { strongAgainst, weakAgainst } = typeAdvantageChart[
        attackerType
      ] || { strongAgainst: [], weakAgainst: [] };

      if (strongAgainst.includes(defenderType)) {
        multiplier *= 1.5;
      } else if (weakAgainst.includes(defenderType)) {
        multiplier *= 0.5;
      }
    }
  }

  return multiplier;
};

const calculateDamage = (
  attacker: PokemonFightData,
  defender: PokemonFightData
): number => {
  const baseDamage = attacker.stats.Attack - defender.stats.Defense;
  const randomFactor = getRandomFactor();
  const typeMultiplier = getTypeMultiplier(attacker.type, defender.type);
  return Math.max(baseDamage * randomFactor * typeMultiplier, 1);
};

export const inAttack = (
  attackingPokemon: FightingData,
  defendingPokemon: FightingData,
  setDefendingPokemon: Dispatch<React.SetStateAction<FightingData>>,
  attackingPokemonData: PokemonFightData,
  defendingPokemonData: PokemonFightData
) => {
  if (checkAttackMiss()) {
    return;
  }

  const damage = calculateDamage(attackingPokemonData, defendingPokemonData);
  const newHP = Math.round(Math.max(defendingPokemon.currentHP - damage, 0));

  setDefendingPokemon((prevState) => ({
    ...prevState,
    currentHP: newHP,
    isFainted: newHP === 0,
  }));
};
const calculateCatchRate = (defender: FightingData, maxHP: number): number => {
  let baseCatchRate = 0.1;
  if (defender.currentHP <= 0.2 * maxHP) {
    baseCatchRate = 0.2;
  }
  return baseCatchRate;
};
export const inCatching = (
  attackingPokemon: FightingData,
  setAttackingPokemon: Dispatch<React.SetStateAction<FightingData>>,
  defendingPokemon: FightingData,
  defendingPokemonData: PokemonFightData,
  setDefendingPokemon: Dispatch<React.SetStateAction<FightingData>>
) => {
  const maxHP = defendingPokemonData.stats.HP;
  const currentCatchRate = calculateCatchRate(defendingPokemon, maxHP);

  const catchSuccess = Math.random() < currentCatchRate;
  if (catchSuccess) {
    setDefendingPokemon((prev) => ({
      ...prev,
      isFainted: true,
    }));
  } else {
    if (attackingPokemon.catchAttempts + 1 >= MAX_CATCH_ATTEMPTS) {
      setAttackingPokemon((prev) => ({
        ...prev,
        catchAttempts: prev.catchAttempts + 1,
        isFainted: true,
      }));
    } else {
      setAttackingPokemon((prev) => ({
        ...prev,
        catchAttempts: prev.catchAttempts + 1,
      }));
    }
  }
};
