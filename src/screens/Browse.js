import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {width} from '../config/Style';
import StoreProductCard from '../components/PT/StoreProductCard';
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
            component={ProductCards}
            options={{title: 'Packs'}}
          />
          <Tab.Screen
            name="Stores"
            component={StoreProductCards}
            options={{title: 'Stores'}}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default Browse;

function StoreProductCards(props) {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoreProductCard
          isCentered
          priceTag
          cardStyle={{width: width - 20}}
          onPress={() =>
            props.navigation.push('ProductDetailed', {hideBuyNow: true})
          }
          isStoreCard={true}
        />
        <StoreProductCard
          isCentered
          priceTag
          cardStyle={{width: width - 20}}
          productImg={DISH_IMG}
          isStoreCard={true}
        />
        <StoreProductCard
          priceTag
          isCentered
          cardStyle={{width: width - 20}}
          isStoreCard={true}
        />
      </ScrollView>
    </View>
  );
}
function ProductCards(props) {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoreProductCard
          isCentered
          priceTag
          corner
          cardStyle={{width: width - 20}}
          onPress={() =>
            props.navigation.push('ProductDetailed', {hideBuyNow: true})
          }
        />
        <StoreProductCard
          isCentered
          priceTag
          corner
          cardStyle={{width: width - 20}}
          productImg={DISH_IMG}
        />
        <StoreProductCard
          priceTag
          isCentered
          corner
          cardStyle={{width: width - 20}}
        />
        {/* <StoreProductCard cardStyle={{width: width - 20}} corner /> */}
      </ScrollView>
    </View>
  );
}
