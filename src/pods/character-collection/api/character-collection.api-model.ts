export interface CharacterEntityApi {
  results: CharacterEntityItemApi[];
  info: Info;
}

export interface Info {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface CharacterEntityItemApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}
