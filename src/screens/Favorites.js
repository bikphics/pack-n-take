import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import Screen from '../components/PT/Screen';
import {width} from '../config/Style';

const Favorites = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title="Favorites" />
      <Screen style={{paddingHorizontal: 10}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ProductCard cardStyle={{width: width - 30}} />
          <ProductCard cardStyle={{width: width - 30}} productImg={DISH_IMG} />
          <ProductCard cardStyle={{width: width - 30}} />
        </ScrollView>
      </Screen>
    </SafeAreaView>
  );
};

export default Favorites;
