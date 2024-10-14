export type Stats = {
  HP: number;
  Attack: number;
  Defense: number;
  SpAttack: number;
  SpDefense: number;
  Speed: number;
};
export enum PokemonType {
  BUG = "Bug",
  DARK = "Dark",
  DRAGON = "Dragon",
  ELECTRIC = "Electric",
  FAIRY = "Fairy",
  FIGHTING = "Fighting",
  FIRE = "Fire",
  FLYING = "Flying",
  GHOST = "Ghost",
  GRASS = "Grass",
  GROUND = "Ground",
  ICE = "Ice",
  NORMAL = "Normal",
  POISON = "Poison",
  PSYCHIC = "Psychic",
  ROCK = "Rock",
  STEEL = "Steel",
  WATER = "Water",
}
export enum Language {
  ENGLISH = "english",
  JAPANESE = "japanese",
  CHINESE = "chinese",
  FRENCH = "french",
}
export type Evolution = {
  prev?: [string, string];
  next?: [string, string][];
};

export type Profile = {
  height: string;
  weight: string;
  egg: string[];
  ability: [string, string][];
  gender: string;
};

export type Image = {
  sprite: string;
  thumbnail: string;
  hires: string;
};

export type Pokemon = {
  id: number;
  nameEnglish: string;
  nameJapanese: string;
  nameChinese: string;
  nameFrench: string;
  type: PokemonType[];
  stats: Stats;
  species: string;
  description: string;
  evolution: Evolution;
  profile: Profile;
  image: Image;
};
