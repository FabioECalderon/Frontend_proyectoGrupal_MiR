import http from './http';

export async function sendConfirmation(email) {
  // user email as parameter to send confirmation, TODO: change the parameter to appointmentId
  const { param } = email;
  try {
    const response = await http.post(`/v1/nodemailer/confirmation/${param}/`);

    const data = response.data;
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
