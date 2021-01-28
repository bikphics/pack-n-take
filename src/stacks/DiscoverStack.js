import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {CategoryDetails, Discover, ProductDetails} from '../screens';
import OrderBooking from '../screens/OrderBooking';

const Stack = createStackNavigator();

const DiscoverStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="OrderBooking" component={OrderBooking} />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
