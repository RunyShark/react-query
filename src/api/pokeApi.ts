import axios from 'axios';

export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

interface ControlAxiosProps {
  url: string;
  method?: MethodType;
}

type MethodType = 'get' | 'post' | 'delete' | 'patch';

export const controlAxios = async <T>({
  url,
  method = 'get',
}: ControlAxiosProps): Promise<T> => {
  const { data } = await pokeApi[method]<T>(url);
  return data;
};
