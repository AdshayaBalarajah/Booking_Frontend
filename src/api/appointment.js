import axios from "axios";

const API_BASE_URL = "http://localhost:8082/appointments";

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

// Function to fetch available slots
export const getAvailableSlots = async (date) => {
  const response = await api.get(`/slots?date=${date}`);
  return response.data;
};

// Function to book an appointment
export const bookAppointment = async (bookingRequest) => {
  const response = await api.post("", bookingRequest);
  return response.data;
};

// Function to get user appointments
export const getUserAppointments = async () => {
  const response = await api.get("");
  return response.data;
};

// Function to cancel an appointment
export const cancelAppointment = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

// Test function to check authentication
export const testAuth = async () => {
  const response = await api.get("/test");
  return response.data;
};
