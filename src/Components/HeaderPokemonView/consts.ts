export enum viewType {
  TABLE = "Table",
  CARDS = "Cards",
}

export const SortBy = {
  NAME_AZ: ["name", "asc"] as const,
  NAME_ZA: ["name", "desc"] as const,
  POWER_HL: ["power", "asc"] as const,
  POWER_LH: ["power", "desc"] as const,
  HP_HL: ["HP", "asc"] as const,
  HP_LH: ["HP", "desc"] as const,
};

export const sortByOptions = [
  {
    label: "Alphabetical A-Z",
    value: "Alphabetical A-Z",
  },
  {
    label: "Alphabetical Z-A",
    value: "Alphabetical Z-A",
  },
  {
    label: "Power (High to low)",
    value: "Power (High to low)",
  },
  {
    label: "Power (Low to high)",
    value: "Power (Low to high)",
  },
  {
    label: "HP (High to low)",
    value: "HP (High to low)",
  },
];
