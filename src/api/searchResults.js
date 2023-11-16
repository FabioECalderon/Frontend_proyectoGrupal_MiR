import http from './http';

export async function getResults({ centerId, specialtyId }) {
  // console.log(centerId);
  // console.log(specialtyId);

  try {
    const { data: response } = await http.get('/v1/doctors');
    const data1 = response.data;
    if (centerId === '' && specialtyId === '') {
      const data = [...data1];
      return {
        data,
      };
    }
    if (centerId != '' && specialtyId === '') {
      const data = data1.filter((element) => element.centerId == centerId);
      return {
        data,
      };
    }
    if (centerId === '' && specialtyId != '') {
      const data = data1.filter(
        (element) => element.specialtyId == specialtyId,
      );
      return {
        data,
      };
    }

    if (centerId != '' && specialtyId != '') {
      const data = data1.filter(
        (element) =>
          element.specialtyId == specialtyId && element.centerId == centerId,
      );

      return {
        data,
      };
    }
  } catch (error) {
    return Promise.reject(error.message);
  }
}
