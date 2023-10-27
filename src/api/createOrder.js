import http from './http';

export async function createOrder() {
  try {
    const response = await http.post('/mercadopago/create-order');

    const { init_point } = response.data;
    window.location.href = init_point;
  } catch (error) {
    console.error(error);
  }

  // try {
  //   const response = await axios.post(
  //     'http://localhost:3000/api/mercadopago/create-order',
  //   );
  //   const { init_point } = response.data;
  //   window.location.href = init_point;
  // } catch (error) {
  //   console.error(error);
  // }
}
