import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {width} from '../config/Style';
import StoreProductCard from '../components/PT/StoreProductCard';
import Packages from './Packages';
import Store from './Stores';
const Tab = createMaterialTopTabNavigator();

const Browse = (props) => {
  return (
    <>
      <Header title="Browse" />
      <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {
              borderBottomWidth: 3,
              borderBottomColor: '#333',
            },
          }}>
          <Tab.Screen
            name="Packs"
            component={Packages}
            options={{title: 'Packs'}}
          />
          <Tab.Screen
            name="Stores"
            component={Store}
            options={{title: 'Stores'}}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default Browse;
