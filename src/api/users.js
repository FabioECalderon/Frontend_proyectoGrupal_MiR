import http from './http';

export async function signIn({ email, password }) {
  try {
    const { data: response } = await http.post('/users/signin', {
      email,
      password,
    });
    const { data } = response;
    return { data };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
