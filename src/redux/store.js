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

// const getAuthData = async () => {
//   try {
//     console.log('coming');
//     // const token = await AsyncStorage.getItem('@token', user.access_token);
//     const userData = await AsyncStorage.getItem('@user', JSON.stringify(user));

//     if (user) {
//       user = userData;
//     }

//     return null;
//   } catch (e) {
//     console.log('Errrrr', e);
//   }
// };

const initialState = {
  // loginUserData: { user: user }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
