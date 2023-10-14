import http from './http';

export async function getResults({ centerId, specialtyId }) {
  if (centerId === '' && specialtyId === '') {
    try {
      const { data: response } = await http.get('/v1/doctors');
      const data = response.data;
      return {
        data,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  if (centerId == !'' && specialtyId === '') {
    try {
      const { data: response } = await http.get(
        `/v1/centers/${centerId}/doctors"`,
      );
      const data = response.data;
      return {
        data,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }

  if (centerId === '' && specialtyId == !'') {
    try {
      const { data: response } = await http.get(
        `/v1/specialties/${specialtyId}/doctors"`,
      );
      const data = response.data;
      return {
        data,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
}
