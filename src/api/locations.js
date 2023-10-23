import http from './http';

function transformLocation(item = {}) {
  return {
    ...item,
  };
}

//API agents
export async function getLocations() {
  try {
    const { data: response } = await http.get('/v1/locations/');
    const data = response.data.map(transformLocation);
    return {
      data,
      meta: response.meta,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function getLocation(id) {
  try {
    const { data: response } = await http.get(`/v1/locations/${id}`);
    const data = transformLocation(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function createLocation(payload) {
  try {
    const response = await http.post('/v1/locations/', payload);

    const data = transformLocation(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
