import { FightType } from "./consts";

export type FightCardProps = {
  id: string;
  img: string;
  name: string;
  power: number;
  fightType?: FightType;
  health: number;
  minHealth: number;
};
