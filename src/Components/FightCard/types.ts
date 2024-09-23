import { FightType } from "./consts";

export type FightCardProps = {
  id: string;
  img: string;
  name: string;
  power: number;
  fightType?: FightType;
  startHealth: number;
  currentHealth: number;
  minHealth: number;
};
