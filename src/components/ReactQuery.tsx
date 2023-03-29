import { useQueryPokemons } from '../hooks/useQueryPokemons';

export const ReactQuery = () => {
  const { query } = useQueryPokemons(50);
console.log(query)
  if (query.isError) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      {query.isLoading && <h1>...loagin</h1>}
      {query.data?.results.map(({ name, url }) => (
        <p key={url}>{name}</p>
      ))}
    </div>
  );
};
