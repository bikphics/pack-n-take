import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  More,
  EditProfile,
  Settings,
  ChangePassword,
  Language,
  Country,
  Orders,
  PaymentMethods,
  PreveiousOrderDetails,
  PaymentCardDetails,
} from '../screens';
const Stack = createStackNavigator();
const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
};

export default MoreStack;
