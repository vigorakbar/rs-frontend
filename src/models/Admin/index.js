import axios from 'axios';

export const loginAdmin = (username, password) => axios.get('/login', {
  auth: {
    username,
    password,
  },
});
