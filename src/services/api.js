import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: `${API_URL}/api/auth`,
});

export const register = (email, password, name) => {
  return api.post('/register', { email, password, name });
};

export const login = (email, password) => {
  return api.post('/login', { email, password });
};

export const getCurrentUser = (token) => {
  return api.get('/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const logout = (refreshToken) => {
  return api.post('/logout', { refreshToken });
};