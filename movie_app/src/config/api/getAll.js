import React, {useState} from 'react';
import axios from 'axios';
import {API_URL} from '@env';

export const getAll = (data, getData) => {
  axios
    .get(API_URL)
    .then(req => {
      console.log(req.data);
      getData(req.data);
    })
    .catch(err => {
      console.log(err);
    });

  return list;
};
