import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {width} from '../config/Style';

const Favorites = () => {
  return (
    <>
      <Header title="Favorites" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProductCard cardStyle={{width: width - 20}} />
            <ProductCard
              cardStyle={{width: width - 20}}
              productImg={DISH_IMG}
            />
            <ProductCard cardStyle={{width: width - 20}} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Favorites;
