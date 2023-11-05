import http from './http';

function transformAppointment(item = {}) {
  return {
    ...item,
  };
}

//API agents
export async function getAppointments() {
  try {
    const { data: response } = await http.get('/v1/appointments/');
    const data = response.data.map(transformAppointment);
    return {
      data,
      meta: response.meta,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function getAppointment(id) {
  try {
    const { data: response } = await http.get(`/v1/appointments/${id}`);
    const data = transformAppointment(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function createAppointment(payload) {
  try {
    const { data: response } = await http.post('/v1/appointments/', payload);

    const data = transformAppointment(response.data);
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
