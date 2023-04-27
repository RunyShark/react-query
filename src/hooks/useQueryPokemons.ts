import { useQuery } from '@tanstack/react-query';
import { controlAxios } from '../api/pokeApi';
import { PokemonDetails } from '../interfaces';

const getPokemons = (limit: number) =>
  controlAxios<PokemonDetails>({ url: `pokemon?limit=${limit}` });

export const useQueryPokemons = (limit: number) => {
  const query = useQuery(['pokemons'], () => getPokemons(limit), {
    /* Si se establece en un número, todas las consultas se recuperarán continuamente a esta frecuencia en milisegundos
     Si se establece en una función, la función se ejecutará con los datos y la consulta más recientes para calcular una frecuencia
     refetchInterval: number | false | ((data: TData | undefined, query: Query) => number | false)
    sirve para desactivar el query */
    // enabled: boolean,
    /* Sirve para indicarle a la query si la data está fresca
    ej staleTime:Infinity Le indicamos al query que la reques que hicimos se mantenga en caché y no sé
    vuelva hacer la petición */
    //staleTime: number | Infinity
    /* Predeterminado a 5 * 60 * 1000(5 minutos) o Infinitydurante SSR
     El tiempo en milisegundos que los datos de caché sin usar/inactivos permanecen en la memoria.
      Cuando la memoria caché de una consulta no se usa o se vuelve inactiva, los datos de la memoria
      caché se recolectarán como elementos no utilizados después de
      esta duración. Cuando se especifican diferentes tiempos de caché, se utilizará el más largo.*/
    //cacheTime: number | Infinity
    /* Estas funciones se ejecutan si la reques es exitosa o falla
     Ej de uso:
     si existe un error navega a el login
     si no existe un error navegame al home*/
    // onSuccess: () => ,
    // onError: () => ,
    /* Esta opción se puede utilizar para transformar o seleccionar una parte de los
    datos devueltos por la función de consulta. Afecta el
     datavalor devuelto, pero no afecta lo que se almacena en la caché de consultas.*/
    // select: (data: TData) => unknown
    /* Predeterminado a true
     Si se establece en true, la consulta se recuperará al volver a conectarse si los datos están obsoletos.
     Si se establece en false, la consulta no se recuperará al volver a conectarse.
     Si se establece en "always", la consulta siempre se recuperará al volver a conectarse.
     Si se establece en una función, la función se ejecutará con la consulta para calcular el valor */
    //refetchOnReconnect: boolean | "always" | ((query: Query) => boolean | "always")
    /* Predeterminado atrue
     Si se establece en true, la consulta se recuperará en el foco de la ventana si los datos están obsoletos.
     Si se establece en false, la consulta no se recuperará en el foco de la ventana.
     Si se establece en "always", la consulta siempre se recuperará en el foco de la ventana.
     Si se establece en una función, la función se ejecutará con la consulta para calcular el valor*/
    //refetchOnWindowFocus: boolean | "always" | ((query: Query) => boolean | "always")
    /* Si false, las consultas fallidas no se volverán a intentar de forma predeterminada.
     Si true, las consultas fallidas se reintentarán infinitamente.
     Si se establece en number, 3., las consultas fallidas se volverán a
     intentar hasta que el recuento de consultas fallidas alcance ese número. */
    // retry: boolean | number | (failureCount: number, error: TError) => boolean
  });

  return { query };
};
