import { DropdownOption } from "../../../../Components/DropDown/types";
import { sortType } from "../../../../Components/Table/consts";

export enum ViewType {
  TABLE = "Table",
  CARDS = "Cards",
}

export enum SortBy {
  NAME_AZ = "Alphabetical A-Z",
  NAME_ZA = "Alphabetical Z-A",
  POWER_HL = "Power (High to low)",
  POWER_LH = "Power (Low to high)",
  HP_HL = "HP (High to low)",
  HP_LH = "HP (Low to High)",
}

export const sortByOptions = [
  {
    label: "Alphabetical A-Z",
    value: SortBy.NAME_AZ,
  },
  {
    label: "Alphabetical Z-A",
    value: SortBy.NAME_ZA,
  },
  {
    label: "Power (High to low)",
    value: SortBy.POWER_HL,
  },
  {
    label: "Power (Low to high)",
    value: SortBy.POWER_LH,
  },
  {
    label: "HP (High to low)",
    value: SortBy.HP_HL,
  },
  {
    label: "HP (Low to High)",
    value: SortBy.HP_LH,
  },
];
