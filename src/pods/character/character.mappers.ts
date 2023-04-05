import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  species: character.species,
  created: character.created,
  gender: character.gender,
  image: character.image,
  status: character.status,
  type: character.type,
  url: character.url,
  bestSentences: character.bestSentences,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character,
  sentence: string
): apiModel.Character =>
  ({
    ...character,
    id: character.id,
    name: character.name,
    species: character.species,
    created: character.created,
    gender: character.gender,
    image: character.image,
    status: character.status,
    type: character.type,
    url: character.url,
    bestSentences: [...character.bestSentences, sentence],
  } as unknown as apiModel.Character);
