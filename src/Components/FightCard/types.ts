import { FightType } from "./consts";

export type FightCardProps = {
  id: string;
  img: string;
  name: string;
  power: number;
  speedAttack: number;
  fightType?: FightType;
  startHealth: number;
  currentHealth: number;
  border: string;
  isWinner: boolean;
};
