import { ReactElement } from 'react';

export type Childre = ReactElement | ReactElement[];

export interface PokemonDetails {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}
