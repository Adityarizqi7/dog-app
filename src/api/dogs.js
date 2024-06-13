import axios from 'axios';

const apiCall = axios.create({
  baseURL: 'https://dog.ceo/api/breeds/',
});

export default apiCall