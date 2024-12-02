import axios from 'axios';

// 임시 토큰 설정
const TOKEN = 'jongwon@gmail.com';

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${TOKEN}`,
  },
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('API 요청 실패:', error);
    return Promise.reject(error);
  }
);
