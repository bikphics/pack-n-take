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
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="PreveiousOrderDetails" component={PreveiousOrderDetails} />
      <Stack.Screen name="PaymentCardDetails" component={PaymentCardDetails} />
    </Stack.Navigator>
  );
};

export default MoreStack;
