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
            component={StoreProductCards}
            options={{title: 'Packs'}}
          />
          <Tab.Screen
            name="Stores"
            component={ProductCards}
            options={{title: 'Stores'}}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default Browse;

function ProductCards(props) {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductCard
          cardStyle={{width: width - 20}}
          onPress={() =>
            props.navigation.push('ProductDetailed', 'Product Details')
          }
        />
        <ProductCard cardStyle={{width: width - 20}} productImg={DISH_IMG} />
        <ProductCard cardStyle={{width: width - 20}} />
      </ScrollView>
    </View>
  );
}
function StoreProductCards(props) {
  return (
    <View style={{flex: 1, paddingHorizontal: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoreProductCard
          onPress={() =>
            props.navigation.push('ProductDetails', 'Product Detailed')
          }
          cardStyle={{width: width - 20}}
          corner
        />
        <StoreProductCard
          cardStyle={{width: width - 20}}
          productImg={DISH_IMG}
          corner
        />
        <StoreProductCard cardStyle={{width: width - 20}} corner />
      </ScrollView>
    </View>
  );
}
