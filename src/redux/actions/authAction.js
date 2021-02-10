import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../constants';

import axios from 'axios';

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({type: LOGIN_REQUEST});
    const {data} = await axios.post(
      'https://www.packntake.com/api/auth/login',
      userData,
    );
    console.log('Data===', data);
    if (data) {
      dispatch({type: LOGIN_SUCCESS, payload: data});
    }
  } catch (error) {
    console.log('Error===', error);
    dispatch({
      type: LOGIN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({type: REGISTER_REQUEST});
    const {data} = await axios.post(
      'https://www.packntake.com/api/auth/register',
      userData,
    );
    console.log('Data===', data);
    if (data) {
      dispatch({type: REGISTER_SUCCESS, payload: data});
    }
  } catch (error) {
    console.log('Error===', error);
    dispatch({
      type: REGISTER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const dispatchAction = (type, payload) => async (dispatch) => {
//   try {
//     console.log('type', `${type}_REQUEST`);
//     dispatch({type: `${type}_REQUEST`});
//     const {data} = await axios.post(
//       'https://www.packntake.com/api/auth/register',
//       payload,
//     );
//     console.log('Data2===', data);
//     if (data) {
//       dispatch({type: `${type}_SUCCESS`, payload: data});
//     }
//   } catch (error) {
//     console.log('Error===', error);
//     dispatch({
//       type: {type: `${type}_ERROR`},
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
