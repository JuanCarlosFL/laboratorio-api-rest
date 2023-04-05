export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url: string;
  created: Date;
  bestSentences: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  status: '',
  created: new Date(),
  gender: '',
  image: '',
  species: '',
  type: '',
  url: '',
  bestSentences: [],
});
