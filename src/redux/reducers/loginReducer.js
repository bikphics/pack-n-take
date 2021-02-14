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
  CHANGE_PASSWORD_USER_SUCCESS
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


export const updateUser = (state = {updateUser: {}}, action) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {loading: true, updateUser: {}};

    case UPDATE_USER_SUCCESS:
      return {
        loading: false,
        updateUser: action.payload,
      };
    case UPDATE_USER_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const changeUserPassword = (state = {changeUser: {}}, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_USER_REQUEST:
      return {loadingChangePassword: true, changeUser: {}};

    case CHANGE_PASSWORD_USER_SUCCESS:
      return {
        loadingChangePassword: false,
        changeUser: action.payload,
      };
    case CHANGE_PASSWORD_USER_ERROR:
      return {
        loadingChangePassword: false,
        errorChangePassword: action.payload,
      };
    default:
      return state;
  }
};

export const getUserInData = (state = {user: {}}, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {loadingUser: true, user: {}};

    case GET_USER_SUCCESS:
      return {
        loadingUser: false,
        user: action.payload,
      };
    case GET_USER_ERROR:
      return {
        loadingUser: false,
        errorUser: action.payload,
      };
    default:
      return state;
  }
};