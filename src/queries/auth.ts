import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAuthToken = () => {
  return window.localStorage.getItem('auth_token');
};

export const setAuthHeader = (token: string | null) => {
  if (token !== null) {
    window.localStorage.setItem("auth_token", token);
  }
};

export const removeAuthHeader = () => {
  const token = getAuthToken();
  if (token !== null) {
    window.localStorage.removeItem("auth_token");
  }
};
