import http from './http';

function transformDoctor(item = {}) {
  return {
    ...item,
  };
}

//API agents
export async function getDoctors() {
  try {
    const { data: response } = await http.get('/v1/doctors/');
    const data = response.data.map(transformDoctor);
    return {
      data,
      meta: response.meta,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function getDoctor(id) {
  try {
    const { data: response } = await http.get(`/v1/doctors/${id}`);
    const data = transformDoctor(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function getAppointmentsByDoctor(id) {
  try {
    const { data: response } = await http.get(`/v1/doctors/${id}/citashoy`);
    const data = transformDoctor(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function createDoctor(payload) {
  try {
    const response = await http.post('/v1/doctors/', payload);

    const data = transformDoctor(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
