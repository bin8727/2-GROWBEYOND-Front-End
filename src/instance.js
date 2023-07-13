import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://manage.growbeyond.store/',
});

export default axiosInstance;