import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-community/async-storage';

import {
  loginUser,
  registerUser,
  getLoggedInUser,
} from '../redux/reducers/loginReducer';

import {getAllResturants} from '../redux/reducers/restaurantReducer';
const user = {};

const reducer = combineReducers({
  loginUser: loginUser,
  registerUser: registerUser,
  getLoggedInUser: getLoggedInUser,
  getAllRestaurants: getAllResturants,
});

const getAuthData = async () => {
  try {
    console.log('coming');
    // const token = await AsyncStorage.getItem('@token', user.access_token);
    const userData = await AsyncStorage.getItem('@user', JSON.stringify(user));
    console.log('userData', userData);
    return userData;
  } catch (e) {
    console.log('Errrrr', e);
  }
};


// Action
const setInit = (result) => {
  return {
    type: 'setInit',
    uid: result,
    username: result,
  };
};
const getAsyncStorage = () => {
  return (dispatch) => {
    AsyncStorage.getItem('@user').then((result) => {
      dispatch(setInit(result));
    });
  };
};

const getUser = () => {
  // Define desired object

  var user = {};
  AsyncStorage.getItem('@user').then((res) => {
    console.log(1111111111, res);
    Object.assign(user, JSON.parse(res));
  });
  return user;
};

const initialState = {
  loginUser: {user: getUser()},
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
