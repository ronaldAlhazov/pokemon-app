export type Stats = {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
};
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
  name: {
    [key in Language]?: string;
  };
  type: string[];
  stats: Stats;
  species: string;
  description: string;
  evolution: Evolution;
  profile: Profile;
  image: Image;
};
