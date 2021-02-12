import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_LOGGIN_IN_USER_SUCCESS,
  GET_LOGGIN_IN_USER_REQUEST,
  GET_LOGGIN_IN_USER_ERROR
} from '../constants';

export const loginUser = (state = {user: {}},action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {loading: true, user: {}};

    case LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case LOGIN_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const registerUser = (state = {user: {}}, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {loading: true, user: {}};

    case REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case REGISTER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};



export const getLoggedInUser = (state = {user: {}}, action) => {
  switch (action.type) {
    case GET_LOGGIN_IN_USER_REQUEST:
      return {loading: true, user: {}};

    case GET_LOGGIN_IN_USER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case GET_LOGGIN_IN_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
