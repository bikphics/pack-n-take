import AsyncStorage from '@react-native-community/async-storage';



export const getLoggedInUser = async() => {
  try {
    return await AsyncStorage.getItem('@user');
  } catch (error) {
      console.log("Error in getLoggedInUser", error);
      return error;
  }
}