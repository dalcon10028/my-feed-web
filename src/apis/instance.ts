import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_MY_FEED_API
});

export default instance;
