import React from 'react';
import {DiscoverStack, BrowseStack, FavoritesStack, MoreStack} from './stacks';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {PT_COLORS} from './config';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CategoryDetails,
  ChangePassword,
  Country,
  EditProfile,
  Language,
  Orders,
  PaymentCardDetails,
  PaymentMethods,
  PreveiousOrderDetails,
  ProductDetails,
  Settings,
} from './screens';
import OrderBooking from './screens/OrderBooking';
import ProductDetailed from './screens/ProductDetailed';
import PastOrderReviewDetails from './screens/PastOrderReviewDetail';
import {BROWSE, DISCOVER, FAVOURITES, MORE} from './assets';
import {Image} from 'react-native';
import Map from './screens/Map';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const PrivateRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainApp" component={MYTabs} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ProductDetailed" component={ProductDetailed} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Country" component={Country} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} />
      <Stack.Screen name="OrderBooking" component={OrderBooking} />
      <Stack.Screen
        name="PastOrderReviewDetail"
        component={PastOrderReviewDetails}
      />
      <Stack.Screen
        name="PreveiousOrderDetails"
        component={PreveiousOrderDetails}
      />
      <Stack.Screen name="PaymentCardDetails" component={PaymentCardDetails} />
    </Stack.Navigator>
  );
};

export default PrivateRoute;

const MYTabs = () => (
  <Tab.Navigator
    shifting={false}
    barStyle={{
      backgroundColor: PT_COLORS.bottomBarColor,
    }}>
    <Tab.Screen
      name="DiscoverTab"
      options={{
        tabBarLabel: 'Discover',
        tabBarIcon: () => (
          <Image source={DISCOVER} style={{width: 22, height: 22}} />
        ),
        tabBarColor: PT_COLORS.primaryBlack,
      }}
      component={DiscoverStack}
    />
    <Tab.Screen
      name="BrowseTab"
      options={{
        tabBarLabel: 'Browse',
        tabBarIcon: () => (
          <Image source={BROWSE} style={{width: 22, height: 22}} />
        ),
        tabBarColor: PT_COLORS.primaryBlack,
      }}
      component={BrowseStack}
    />
    <Tab.Screen
      name="FavoritesTab"
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: () => (
          <Image source={FAVOURITES} style={{width: 22, height: 22}} />
        ),
        tabBarColor: PT_COLORS.primaryBlack,
      }}
      component={FavoritesStack}
    />
    <Tab.Screen
      name="MoreTab"
      options={{
        tabBarLabel: 'More',
        tabBarIcon: () => (
          <Image source={MORE} style={{width: 22, height: 22}} />
        ),
        tabBarColor: PT_COLORS.primaryBlack,
      }}
      component={MoreStack}
    />
  </Tab.Navigator>
);
