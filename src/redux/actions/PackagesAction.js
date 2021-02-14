import axios from 'axios';
import {useSelector} from 'react-redux';

export const fetchPackagesRequest = () => {
  return {
    type: 'FETCH_PACKAGES_REQUEST',
  };
};
export const fetchPackagesSuccess = (packages) => {
  return {
    type: 'FETCH_PACKAGES_SUCCESS',
    payload: packages,
  };
};
export const fetchPackagesFailure = (error) => {
  return {
    type: 'FETCH_PACKAGES_FAILURE',
    payload: error,
  };
};
export const getCurrentPage = () => {
  return {
    type: 'GET_CURRENT_PAGE',
  };
};

export const fetchPackages = (token) => {
  return (dispatch, getState) => {
    const packageCurrentState = getState().PackagesReducer;
    dispatch(fetchPackagesRequest());
    axios
      .get(`https://www.packntake.com/api/packages`, {
        params: {
          page: packageCurrentState.page,
          token: token,
        },
      })
      .then((res) => {
        const packages = [...packageCurrentState.packages, ...res.data.data];
        dispatch(fetchPackagesSuccess(packages));
      })
      .catch((error) => {
        dispatch(fetchPackagesFailure(error.message));
      });
  };
};
