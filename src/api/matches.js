import axios from 'axios';

const baseUrl = `/api/matchhistory`;
const ultraBaseUrl = `http://localhost:9000`;

export const getAll = async () => {
  const {
    data
  } = await axios.get(baseUrl, {
    baseURL: ultraBaseUrl
  });
  return data;
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

export const save = async (match) => {
  const {
    id,
    ...values
  } = match;
  await axios({
    method: id ? 'PUT' : 'POST',
    url: `${baseUrl}/${id ?? ''}`,
    data: values,
    baseURL: ultraBaseUrl
  });
};