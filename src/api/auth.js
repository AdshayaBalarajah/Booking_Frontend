import axios from "axios";

const API_BASE_URL = "http://localhost:8082/auth";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const register = async (userData) => {
  const response = await api.post("/register", userData);
  return response;
};

export const login = async (credentials) => {
  const response = await api.post("/login", credentials);
  return response;
};

export const refreshToken = async (token) => {
  const response = await api.post(`/refresh-token?refreshToken=${token}`);
  return response.data;
};

export const forgotPassword = async (email) => {
  const response = await api.post(`/forgot-password?email=${email}`);
  return response.data;
};

export const resetPassword = async (resetData) => {
  const response = await api.post("/reset-password", resetData);
  return response.data;
};

export const testAuth = async (token) => {
  const response = await api.get("/test", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
