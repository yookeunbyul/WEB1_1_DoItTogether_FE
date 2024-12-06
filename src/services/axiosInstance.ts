import axios from 'axios';

const apiUrl =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_API_BASE_URL // 로컬 환경
    : import.meta.env.VITE_SERVER_URL; // Vercel 환경에서는 프록시된

export const axiosInstance = axios.create({
  baseURL: apiUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API 요청 실패:', error);
    return Promise.reject(error);
  }
);
