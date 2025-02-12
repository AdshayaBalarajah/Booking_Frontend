import axios from "axios";

const API_BASE_URL = "http://localhost:8082/admin";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAllAppointments = async () => {
  const response = await api.get("/appointments");
  return response.data;
};

export const updateBookingStatus = async (id, status) => {
  const response = await api.put(`/appointments/${id}/status`, { status });
  return response.data;
};

export const addTimeSlot = async (date, timeSlot) => {
  const response = await api.post("/slots", { date, timeSlot });
  return response.data;
};

export const removeTimeSlot = async (date, timeSlot) => {
  const response = await api.delete("/slots", { data: { date, timeSlot } });
  return response.data;
};

export const testAuth = async () => {
  const response = await api.get("/test");
  return response.data;
};

