import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {width} from '../config/Style';

const CategoryDetails = (props) => {
  const categoryName = props.route.params;
  return (
    <>
      <Header
        title={categoryName}
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => {
            props.navigation.goBack();
          },
        }}
      />
      <SafeAreaView>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <ProductCard
              cardStyle={{width: width - 30}}
              productImg={DISH_IMG}
            />
            <ProductCard cardStyle={{width: width - 30}} />
            <ProductCard cardStyle={{width: width - 30}} />
            <ProductCard cardStyle={{width: width - 30}} />
            <ProductCard cardStyle={{width: width - 30}} /> */}
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CategoryDetails;
