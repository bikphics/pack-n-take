import React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import {DISH_IMG} from '../assets';
import {Header, FavouriteCard} from '../components';
import {width} from '../config/Style';

const Favorites = () => {
  return (
    <>
      <Header title="Favorites" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <FavouriteCard cardStyle={{width: width - 20}} />
            <FavouriteCard
              cardStyle={{width: width - 20}}
              productImg={DISH_IMG}
            />
            <FavouriteCard cardStyle={{width: width - 20}} />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Favorites;
