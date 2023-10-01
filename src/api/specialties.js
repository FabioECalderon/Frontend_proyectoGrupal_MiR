import http from './http';

function transformSpecialty(item = {}) {
  return {
    ...item,
  };
}

//API agents
export async function getSpecialties() {
  try {
    const { data: response } = await http.get('/v1/specialties/');
    const data = response.data.map(transformSpecialty);
    return {
      data,
      meta: response.meta,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function getSpecialty({ id }) {
  try {
    const { data: response } = await http.get(`/v1/specialties/${id}`);
    const data = transformSpecialty(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function createSpecialty(payload) {
  try {
    const response = await http.post('/v1/specialties/', payload);

    const data = transformSpecialty(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
