import { Dispatch } from "react";
import { PokemonFightData } from "../../types";
import { MAX_CATCH_ATTEMPTS, typeAdvantageChart } from "./consts";
import { FightingData } from "./types";
import { PokemonType } from "../../../PokemonView/Pokemon";
export const checkAttackMiss = (
  attackingPokemon: FightingData,
  defendingPokemon: FightingData
): boolean => {
  const baseMissChance = 0.05;

  const speedDifference = attackingPokemon.Speed - defendingPokemon.Speed;

  const adjustedMissChance = Math.max(
    0,
    baseMissChance - speedDifference * 0.01
  );

  const finalMissChance = Math.min(adjustedMissChance, 1);

  return Math.random() < finalMissChance;
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
        multiplier *= 1.2;
      } else if (weakAgainst.includes(defenderType)) {
        multiplier *= 0.8;
      }
    }
  }

  return multiplier;
};

const calculateDamage = (
  attacker: FightingData,
  defender: FightingData
): number => {
  const baseDamage = attacker.Attack - defender.Defense;

  const randomFactor = getRandomFactor();

  const typeMultiplier = getTypeMultiplier(attacker.type, defender.type);

  return Math.max(baseDamage * randomFactor * typeMultiplier, 1);
};

export const inAttack = (
  attackingPokemon: FightingData,
  defendingPokemon: FightingData,
  setDefendingPokemon: Dispatch<React.SetStateAction<FightingData>>
) => {
  if (checkAttackMiss(attackingPokemon, defendingPokemon)) {
    return true;
  }

  const damage = calculateDamage(attackingPokemon, defendingPokemon);

  const newHP = Math.round(Math.max(defendingPokemon.currentHP - damage, 0));

  setDefendingPokemon((prevState) => ({
    ...prevState,
    currentHP: newHP,
    isFainted: newHP === 0,
  }));
  return false;
};
const calculateCatchRate = (defender: FightingData, maxHP: number): number => {
  let baseCatchRate = 0.1;
  if (defender.currentHP <= 0.25 * maxHP) {
    baseCatchRate = 0.25;
  }
  return baseCatchRate;
};
export const inCatching = (
  attackingPokemon: FightingData,
  setAttackingPokemon: Dispatch<React.SetStateAction<FightingData>>,
  defendingPokemon: FightingData,
  setDefendingPokemon: Dispatch<React.SetStateAction<FightingData>>
) => {
  const maxHP = defendingPokemon.HP;
  const currentCatchRate = calculateCatchRate(defendingPokemon, maxHP);

  const catchSuccess = Math.random() < currentCatchRate;
  if (catchSuccess) {
    setDefendingPokemon((prev) => ({
      ...prev,
      isFainted: true,
    }));
    return true;
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
    return false;
  }
};
