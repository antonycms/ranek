import axios from 'axios';

const baseApi = axios.create({
  baseURL: process.env.VUE_APP_URL_BASE_API,
});

export default baseApi;
