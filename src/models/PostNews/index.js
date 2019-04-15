import axios from 'axios';

export const postNews = content => axios.post('/news', {
  content,
});
