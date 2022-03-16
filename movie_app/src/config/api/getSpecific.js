import axios from 'axios';
import {API_URL} from '@env';

export const get = async (setData, route) => {
  await axios
    .get(`${API_URL}/${route.params.movieId}`)
    .then(req => {
      setData(req.data);
    })
    .catch(err => {
      console.log(err);
    });
};
