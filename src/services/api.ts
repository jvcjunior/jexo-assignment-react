import axios from 'axios';

const usersAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export {
  usersAPI,
};