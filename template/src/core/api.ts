import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// #region [DEFAULTS]
const DEFAULT_URL = 'http://api.mob.simplefarm.com.br/api/'; // <-- Colocar a conexão do seu cliente ou api como default
const DEFAULT_TIMEOUT = 10 * 60 * 1000; // <-- Default de 10 minutos
// #endregion

// #region [METHODS]
export async function getBaseUrl() {
  const connection = await AsyncStorage.getItem('BaseUrl');

  const url = connection !== null ? `${connection}/api/` : DEFAULT_URL;

  return url;
}

export async function setBaseUrl(connection: string) {
  await AsyncStorage.setItem('BaseUrl', connection);
}

export async function getToken() {
  const token = await AsyncStorage.getItem('AuthToken'); // <-- Mude para o padrão que a sua api utiliza

  const authToken = `mobile ${token}`; // <-- Mude para o padrão que a sua api utiliza

  return authToken;
}

export async function setToken(token: string) {
  await AsyncStorage.setItem('AuthToken', token); // <-- Mude para o padrão que a sua api utiliza
}
// #endregion

// #region [CREATE_API]
const api = axios.create({});

api.defaults.timeout = DEFAULT_TIMEOUT;

api.interceptors.request.use(
  async (config) => {
    const newConfig = { ...config };

    newConfig.baseURL = await getBaseUrl();

    newConfig.headers = {
      ...newConfig.headers,
      Authorization: await getToken(),
    }; // <-- Caso não possua tokken, comente ou remova essa linha

    return newConfig;
  },
  (error) => Promise.reject(error),
);

api.defaults.headers.post['Content-Type'] = 'application/json';
// #endregion

export default api;
