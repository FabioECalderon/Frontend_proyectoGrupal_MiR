import http from './http';

function transformCenter(item = {}) {
  return {
    ...item,
  };
}

//API agents
export async function getCenters() {
  try {
    const { data: response } = await http.get('/v1/centers/');
    const data = response.data.map(transformCenter);
    return {
      data,
      meta: response.meta,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function getCenter({ id }) {
  try {
    const { data: response } = await http.get(`/v1/centers/${id}`);
    const data = transformCenter(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function createCenter(payload) {
  try {
    const response = await http.post('/v1/centers/', payload);

    const data = transformCenter(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
