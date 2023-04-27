import { useQuery } from '@tanstack/react-query';
import { controlAxios } from '../api/pokeApi';
import { PokemonDetails } from '../interfaces';

const getPokemons = (limit: number) =>
  controlAxios<PokemonDetails>({ url: `pokemon?limit=${limit}` });

export const useQueryPokemons = (limit: number) => {
  const query = useQuery(['pokemons'], () => getPokemons(limit), {
    refetchInterval: 1000,
  });

  return { query };
};
