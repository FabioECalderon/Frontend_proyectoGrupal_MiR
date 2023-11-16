import http from '../http';

import { setSession } from '../session';
import { decodeUserOutput } from './decoders';

export async function signIn({ email, password }) {
  try {
    const { data: response } = await http.post('/users/signin', {
      email,
      password,
    });

    const data = await decodeUserOutput(response.data);
    const { token = '' } = response.meta;

    setSession(token);
    return { data };
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error);
  }
}

export async function signUp(payload) {
  try {
    const { data: response } = await http.post('/v1/users/', payload);

    const data = response.data;
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}

export async function getUser(userId) {
  try {
    const { data: response } = await http.get(`/users/${userId}`);
    const data = response.data;
    return { data };
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error);
  }
}

export async function getUserAppointments(userId) {
  try {
    const { data: response } = await http.get(`/users/${userId}/appointments`);
    const data = response.data;
    return { data };
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error);
  }
}

export async function updateUser({ userId, payload }) {
  try {
    const { data: response } = await http.put(`/v1/users/${userId}/`, payload);

    const data = response.data;
    return {
      data,
    };
  } catch (error) {
    return Promise.reject(error.message);
  }
}
