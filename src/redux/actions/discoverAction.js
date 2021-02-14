import {
  FETCH_DISCOVER_DATA_ERROR,
  FETCH_DISCOVER_DATA_SUCCESS,
  FETCH_DISCOVER_DATA_REQUEST,
} from '../constants';

import axios from 'axios';

export const getAllDiscoverDataAction = (token) => async (dispatch) => {
  try {

    console.log("token",token);
    dispatch({type: FETCH_DISCOVER_DATA_REQUEST});
    if(token) {
        console.log('tttttttt======', token);
        const {data} = await axios.get(
          `https://www.packntake.com/api/discover?token=${token}`,
        );
        console.log('Data===', data.data);
        if (data) {
          dispatch({type: FETCH_DISCOVER_DATA_SUCCESS, payload: data.data});
        }
    } else {
        dispatch({type: FETCH_DISCOVER_DATA_ERROR, payload: 'Token not found'})
    }
  } catch (error) {
    console.log('Error===', error.response);
    dispatch({
      type: FETCH_DISCOVER_DATA_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
