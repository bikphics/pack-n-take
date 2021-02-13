import {
    FETCH_RESTAURENT_ERROR,
    FETCH_RESTAURENT_SUCCESS,
    FETCH_RESTAURENT_REQUEST
  } from '../constants';
  
  import axios from 'axios';
  
  export const getAllResturants = (token) => async (dispatch) => {
    try {
      dispatch({type: FETCH_RESTAURENT_REQUEST});
      const {data} = await axios.get(
        `https://www.packntake.com/api/restaurants?token=${token}`
      );
      console.log('Data===', data);
      if (data) {
        dispatch({type: FETCH_RESTAURENT_SUCCESS, payload: data});
      }
    } catch (error) {
      console.log('Error===', error.response);
      dispatch({
        type: FETCH_RESTAURENT_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  