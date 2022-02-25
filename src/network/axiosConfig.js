import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

// Add a request intercepto4
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Interceptor", config);
    config.headers = {
      ...config.headers,
      'Access-Control-Allow-Origin': 'http://localhost:4000/courses',
    };

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
