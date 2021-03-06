import axios from 'axios';

const usersAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

const avatarAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

export {
  usersAPI,
  avatarAPI
};