import { useEffect, useState } from 'react';
import { PokemonDetails } from '../interfaces';

interface Props {
  timeCache?: number;
}

export const useFech = ({ timeCache = 1000 }: Props) => {
  const [pokemons, setPokemons] = useState<PokemonDetails>();
  const [error, setError] = useState(false);

  const getPokemons = async (): Promise<void> => {
    try {
      console.log('start');
      const rest = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
      const data = await rest.json();
      localStorage.setItem('pokemons', JSON.stringify(data));
      setPokemons(data);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    //Esto no es realmente caché, ya que no se está almacenando en caché, esto es una simulación
    const pokemonSimulacionCache = localStorage.getItem('pokemons');
    if (pokemonSimulacionCache) {
      setPokemons(JSON.parse(pokemonSimulacionCache));
    } else {
      getPokemons();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log('remove cache');
      localStorage.removeItem('pokemons');
    }, timeCache);
  }, []);

  return {
    pokemons,
    error,
  };
};
