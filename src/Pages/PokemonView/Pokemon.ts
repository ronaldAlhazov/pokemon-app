export type BaseStats = {
  HP: number;
  Attack: number;
  Defense: number;
  "Sp. Attack": number;
  "Sp. Defense": number;
  Speed: number;
};

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
    english: string;
    japanese?: string;
    chinese?: string;
    french?: string;
  };
  type: string[];
  base: BaseStats;
  species: string;
  description: string;
  evolution: Evolution;
  profile: Profile;
  image: Image;
};
