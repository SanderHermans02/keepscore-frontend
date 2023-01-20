import axios from 'axios';
import {
  useAuth0,
} from '@auth0/auth0-react';
import {
  useCallback,
  useMemo,
} from 'react';
// const baseUrl = `${process.env.REACT_APP_API_URL}/teams`;
const baseUrl = `/api/teams`;
const ultraBaseUrl = `http://localhost:9000`;


const useTeams = () => {
  const {
    getAccessTokenSilently
  } = useAuth0();



  const getAll = useCallback(async () => {
    const token = await getAccessTokenSilently();
    console.log(baseUrl)
    const {
      data
    } = await axios.get(baseUrl, {
      baseURL: ultraBaseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data.items;
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
    console.log(id);
    await axios.delete(
      `${baseUrl}/${id}`, {
        baseURL: ultraBaseUrl,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }, [getAccessTokenSilently]);

  const save = useCallback(async (team) => {
    const token = await getAccessTokenSilently();
    const {
      id,
      ...values
    } = team;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: `${baseUrl}/${id ?? ''}`,
      data: values,
      baseURL: ultraBaseUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return team;
  }, [getAccessTokenSilently]);

  const teamsApi = useMemo(() => ({
    getAll,
    getById,
    deleteById,
    save,
  }), [getAll, getById, deleteById, save]);
  return teamsApi;
};

export default useTeams;