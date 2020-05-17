import axios from 'axios';
import { createMessage, returnErrors } from './messages';


import { ALL_LEADS } from './types';

// GET LEADS
export const allleads = () => (dispatch, getState) => {
  axios
    .get('/api/leads2/')
    .then((res) => {
      dispatch({
        type: ALL_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

