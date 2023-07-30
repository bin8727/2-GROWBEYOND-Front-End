import axios from "axios";

const axiosInstance = axios.create({

  // baseURL: 'https://manage.growbeyond.store/',
  baseURL: 'https://port-0-growbeyond-cu6q2blkhh9lxj.sel4.cloudtype.app/',
  // baseURL: 'http://127.0.0.1:8000/',
  
});

export default axiosInstance;