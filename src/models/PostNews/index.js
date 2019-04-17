import axios from 'axios';

export const postNews = (title, thumbnail, content, token) => axios.post('/news', {
  title,
  thumbnail,
  content,
},
{
  headers: {
    'X-Access-Token': token,
  },
});
