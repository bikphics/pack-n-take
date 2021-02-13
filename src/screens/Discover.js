import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, StyleSheet, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Title, Button, Appbar} from 'react-native-paper';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {PT_COLORS} from '../config';
import AsyncStorage from '@react-native-community/async-storage';
import {getLoggedInUser} from '../redux/actions/authAction';

import {getAllResturants} from '../redux/actions/restaurantAction';
import { useStore } from 'react-redux'

import {useDispatch, useSelector} from 'react-redux';
const Discover = (props) => {
  const [items, setItems] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState({});

  const dispatch = useDispatch();
  // Select getLoggedInUser state
  const resultRestaturants = useSelector((state) => state.getAllRestaurants);
  const store = useStore();
  const user = store.getState().loginUser;
  const loginUser = useSelector((state) => state.loginUser);
  console.log("loginUser",user);
  const {loading, error, restaurants} = resultRestaturants;
  const URL = "https://www.packntake.com/api";

  useEffect(() => {
    console.log("called");
    AsyncStorage.getItem('@user')
      .then((user) => {
        setUserLoggedIn(JSON.parse(user));
        console.log("discobver", userLoggedIn);
        fetchData();
      })
      .catch((err) => {
        console.log(error);
      });

    console.log('resultRestaturants', resultRestaturants);


    if(!loading) {
    console.log('restaurants', restaurants);
    }
  }, []);

  const fetchData = async () => {
    console.log(userLoggedIn);
    dispatch(getAllResturants(userLoggedIn.access_token));

  };

  const fetchDiscoverData = (access_token) => {
    axios.get(`${URL}/discover`, {
      params: {
        token: access_token
      }
    })
    .then( (response) => {
      console.log("Response Datassss",response.data);
    })
  
  }
 

  return (
    <>
      <Header title="Khalidya, Abu Dhabi" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          {/* {items.length > 0 ? ( */}
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
              {/* {items.map((item, index) => (
                  <ProductCard
                    key={item.RestaurantSlug}
                    productImg={{uri: item.RestaurantImage}}
                    restaurantName={item.RetaurantName}
                    logoImg={{uri: item.RetaurantLogo}}
                  />
                ))} */}
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
                  props.navigation.push('CategoryDetails', 'Collect For Diner')
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
        </View>
      </SafeAreaView>
    </>
  );
};

// ) : (
//   <View style={styles.activityIndicatorWrapper}>
//     <ActivityIndicator size="large" color={PT_COLORS.primaryBlack} />
//   </View>
// )}
const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Discover;
