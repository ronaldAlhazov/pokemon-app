import { FightType } from "./consts";

export type CardProps = {
  id: string;
  img: string;
  name: string;
  power: number;
  fightType?: FightType;
  health: number;
  minHealth: number;
};
