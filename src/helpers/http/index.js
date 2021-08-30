import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data) => api.post("/api/v2/sendotp", data);
export const verifyOtp = (data) => api.post("/api/v2/verifyotp", data);
export const logOut = () => api.post("/api/v2/logout");
export const addtocart = (data) => api.post("api/v1//user/cart/additem", data);
export const getcart = () => api.post(`/api/v1/user/cart/getcart`);
export const deleteitem = (data) =>
  api.post("api/v1/user/cart/deleteitem", data);
//Interceptors
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    //give error from config if error occurs
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest.isRetry = true;
      try {
        await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v2/refreshtoken`,
          {
            withCredentials: true,
          }
        );

        return api.request(originalRequest);
      } catch (err) {
        console.log(err.message);
      }
    }
    throw error;
  }
);

export default api;
