import { useFech } from '../hooks/useFech';

export const Fetch = () => {
  const { pokemons, error } = useFech({});

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      {!pokemons && <h1>...loagin</h1>}
      {pokemons &&
        pokemons.results.map(({ name, url }) => <p key={url}>{name}</p>)}
    </div>
  );
};
