import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_LOGGIN_IN_USER_SUCCESS,
  GET_LOGGIN_IN_USER_REQUEST,
  GET_LOGGIN_IN_USER_ERROR,
  UPDATE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  CHANGE_PASSWORD_USER_ERROR,
  CHANGE_PASSWORD_USER_REQUEST,
  CHANGE_PASSWORD_USER_SUCCESS,
} from '../constants';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({type: LOGIN_REQUEST});

    const {data} = await axios.post(
      'https://www.packntake.com/api/auth/login',
      userData,
    );
    if (data) {
      dispatch({type: LOGIN_SUCCESS, payload: data});
    }
  } catch (error) {
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

export const getLoggedInUser = () => async (dispatch) => {
  try {
    dispatch({type: GET_LOGGIN_IN_USER_REQUEST});

    const user = await AsyncStorage.getItem('@user');
    if (user) {
      dispatch({type: GET_LOGGIN_IN_USER_SUCCESS, payload: user});
    }
  } catch (error) {
    console.log('Error===', error);
    dispatch({
      type: GET_LOGGIN_IN_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserAction = (userData, token) => async (dispatch) => {
  try {
    dispatch({type: UPDATE_USER_REQUEST});
    const {data} = await axios.put(
      `https://www.packntake.com/api/auth/updateuserinfo?token=${token}`,
      userData,
    );
    console.log('Data===', data);
    if (data) {
      dispatch({type: UPDATE_USER_SUCCESS, payload: data});
    }
  } catch (error) {
    console.log('Error===', error.response);
    dispatch({
      type: UPDATE_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const changePasswordAction = (userData, token) => async (dispatch) => {
  try {
    dispatch({type: CHANGE_PASSWORD_USER_REQUEST});
    const {data} = await axios.put(
      `https://www.packntake.com/api/auth/updateuserpassword?token=${token}`,
      userData,
    );
    console.log('Data===', data);
    if (data) {
      dispatch({type: CHANGE_PASSWORD_USER_SUCCESS, payload: data});
    }
  } catch (error) {
    console.log('Error===', error.response);
    dispatch({
      type: CHANGE_PASSWORD_USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserAction = (token) => async (dispatch) => {
  try {
    dispatch({type: GET_USER_REQUEST});
    const {data} = await axios.post(
      `https://www.packntake.com/api/auth/me?token=${token}`,
    );
    console.log('Data===', data.data);
    if (data) {
      dispatch({type: GET_USER_SUCCESS, payload: data.data});
    }
  } catch (error) {
    console.log('Error===', error.response);
    dispatch({
      type: GET_USER_ERROR,
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
