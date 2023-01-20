import axios from 'axios';
import {
  useAuth0,
} from '@auth0/auth0-react';
import {
  useCallback,
  useMemo,
} from 'react';
const baseUrl = `/api/matchhistory`;
const ultraBaseUrl = `http://localhost:9000`;

const useMatches = () => {
  const {
    getAccessTokenSilently
  } = useAuth0();


  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const {
      data
    } = await axios.get(baseUrl, {
      baseURL: ultraBaseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }, [getAccessTokenSilently]);

  const getById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();
    const {
      data
    } = await axios.get(`${baseUrl}/${id}`, {
      baseURL: ultraBaseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  }, [getAccessTokenSilently]);

  const deleteById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();
    await axios.delete(
      `${baseUrl}/${id}`, {
        baseURL: ultraBaseUrl,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }, [getAccessTokenSilently]);

  const save = useCallback(async (match) => {
    const token = await getAccessTokenSilently();
    const {
      id,
      ...values
    } = match;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: `${baseUrl}/${id ?? ''}`,
      data: values,
      baseURL: ultraBaseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }, [getAccessTokenSilently]);

  const matchApi = useMemo(() => ({
    getAll,
    getById,
    deleteById,
    save,
  }), [getAll, getById, deleteById, save]);

  return matchApi;
};

export default useMatches;