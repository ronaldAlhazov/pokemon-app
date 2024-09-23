import { FightType } from "../../../../Components/FightCard/consts";
import { FightCardProps } from "../../../../Components/FightCard/types";
import { FightingData } from "./types";

export const initialCard: FightCardProps = {
  id: "",
  img: "",
  name: "",
  power: 0,
  fightType: FightType.ME,
  startHealth: 0,
  currentHealth: 0,
  minHealth: 0,
};

export const initialFightingData: FightingData = {
  id: 0,
  name: "",
  currentHP: 0,
  isFainted: false,
};
