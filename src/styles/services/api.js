import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDU1NjYxNzYsImV4cCI6MTYwNjE3MDk3Niwic3ViIjoiODI3ZGEwM2UtYWNiYi00MzE2LTgzMTUtMjJmMTc0ZjE5MTE0In0.4Ke3QVT0w-YiXab2s2IhEPuWgajRTnlFllwW_WUMshY';

const instance = axios.create({
  baseURL: 'https://store-api-al.herokuapp.com',
  headers: { Authorization: `Bearer ${token}` },
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    return Promise.reject(error.response);
  }
);

export default instance;
