import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: "https://landingapi.seamsline.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// Waitlist API
export const joinWaitlist = async (data: { email: string; fullname: string }) => {
  try {
    const response = await api.post("/api/waitlist", data);
    return response.data;
  } catch (error: any) {
    console.error("Waitlist Error:", error.response?.data || error.message);
    throw error;
  }
};

// Register API
export const registerEarly = async (data: {
  email: string;
  fullname: string;
  password: string;
}) => {
  try {
    const response = await api.post("/api/early-register", data);
    return response.data;
  } catch (error: any) {
    console.error("Register Error:", error.response?.data || error.message);
    throw error;
  }
};

//subscribe to newsletter API
export const subscribeNewsletter = async (data: { email: string }) => {
  try {
    const response = await api.post("/api/subscribe", data);
    return response.data;
    } catch (error: any) {
    console.error("Newsletter Subscription Error:", error.response?.data || error.message);
    throw error;
  }
};

export default api;
