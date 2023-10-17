import http from './http';

export async function getResults({ centerId, specialtyId }) {
  // console.log(centerId);
  // console.log(specialtyId);
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
      const { data: response } = await http.get(`/centers/${centerId}/doctors`);
      const data = response.data;
      console.log(data);
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
        `/specialties/${specialtyId}/doctors`,
      );
      const data = response.data;
      console.log(data);
      return {
        data,
      };
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
}
