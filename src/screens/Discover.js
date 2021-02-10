import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Title, Button, Appbar} from 'react-native-paper';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {PT_COLORS} from '../config';

const Discover = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://www.packntake.com/api/restaurants').then((response) => {
      setItems(response.data.data);
    }).catch(err => {
      console.log(`ERROR`, err);
    })
  });

  return (
    <>
      <Header title="Khalidya, Abu Dhabi" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          {items.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: 5,
                }}>
                <Title>Near by</Title>
                <Button
                  labelStyle={{fontSize: 12}}
                  onPress={() =>
                    props.navigation.push('CategoryDetails', 'Near By')
                  }
                  color={PT_COLORS.primaryBlack}>
                  {'More >'}
                </Button>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                  <ProductCard
                    key={item.RestaurantSlug}
                    productImg={{uri: item.RestaurantImage}}
                    restaurantName={item.RetaurantName}
                    logoImg={{uri: item.RetaurantLogo}}
                  />
                ))}
                <ProductCard
                  corner
                  onPress={() =>
                    props.navigation.push('ProductDetails', 'Product Details')
                  }
                />
                <ProductCard corner />
                <ProductCard corner />
              </ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: 5,
                }}>
                <Title>Meals</Title>
                <Button
                  labelStyle={{fontSize: 12}}
                  onPress={() =>
                    props.navigation.push('CategoryDetails', 'Meals')
                  }
                  color={PT_COLORS.primaryBlack}>
                  {'More >'}
                </Button>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ProductCard corner productImg={DISH_IMG} />
                <ProductCard corner productImg={DISH_IMG} />
                <ProductCard corner productImg={DISH_IMG} />
              </ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  margin: 5,
                }}>
                <Title>Collect For Diner</Title>
                <Button
                  labelStyle={{fontSize: 12}}
                  onPress={() =>
                    props.navigation.push(
                      'CategoryDetails',
                      'Collect For Diner',
                    )
                  }
                  color={PT_COLORS.primaryBlack}>
                  {'More >'}
                </Button>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <ProductCard corner />
                <ProductCard corner />
                <ProductCard corner />
              </ScrollView>
            </ScrollView>
          ) : (
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator size="large" color={PT_COLORS.primaryBlack} />
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Discover;
