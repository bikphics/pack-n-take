import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    FETCH_RESTAURENT_ERROR,
    FETCH_RESTAURENT_REQUEST,
    FETCH_RESTAURENT_SUCCESS
  } from '../constants';
  

  
  export const getAllResturants = (state = {restaurants: []}, action) => {
    switch (action.type) {
      case FETCH_RESTAURENT_REQUEST:
        return {loading: true, restaurants: []};
  
      case FETCH_RESTAURENT_SUCCESS:
        return {
          loading: false,
          user: action.payload,
        };
      case FETCH_RESTAURENT_ERROR:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  