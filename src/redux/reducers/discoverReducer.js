import {
    FETCH_DISCOVER_DATA_ERROR,
    FETCH_DISCOVER_DATA_SUCCESS,
    FETCH_DISCOVER_DATA_REQUEST
  } from '../constants';
  

  
  export const getAllDicoverData = (state = {dicoverDatas: []}, action) => {
    switch (action.type) {
      case FETCH_DISCOVER_DATA_REQUEST:
        return {loading: true, dicoverDatas: []};
  
      case FETCH_DISCOVER_DATA_SUCCESS:
        return {
          loading: false,
          dicoverDatas: action.payload,
        };
      case FETCH_DISCOVER_DATA_ERROR:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  