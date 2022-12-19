import axios from 'axios';

// const baseUrl = `${process.env.REACT_APP_API_URL}/teams`;
const baseUrl = `/api/teams`;
const ultraBaseUrl = `http://localhost:9000`;

export const getAll = async () => {
  console.log(baseUrl)
  const {
    data
  } = await axios.get(baseUrl, {
    baseURL: ultraBaseUrl
  });

  return data.items;
};

export const getById = async (id) => {

  const {
    data
  } = await axios.get(`${baseUrl}/${id}`, {
    baseURL: ultraBaseUrl
  });

  return data;
};

export const deleteById = async (id) => {
  await axios.delete(
    `${baseUrl}/${id}`, {
      baseURL: ultraBaseUrl
    }
  );
};

export const save = async (team) => {
  console.log(team)
  const {
    id,
    ...values
  } = team;
  await axios({
    method: id ? 'PUT' : 'POST',
    url: `${baseUrl}/${id ?? ''}`,
    data: values,
    baseURL: ultraBaseUrl
  });
  return team;
};