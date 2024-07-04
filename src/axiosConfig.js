import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dahua.metcfire.com.tw/api/CRUDTest',
});

export default axiosInstance;
