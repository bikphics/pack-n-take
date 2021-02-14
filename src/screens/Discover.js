import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Title, Button, Appbar} from 'react-native-paper';
import {DISH_IMG} from '../assets';
import {Header, ProductCard} from '../components';
import {PT_COLORS} from '../config';

import {getAllDiscoverDataAction} from '../redux/actions/discoverAction';
import {useStore} from 'react-redux';

import {useDispatch, useSelector} from 'react-redux';
const Discover = (props) => {
  const dispatch = useDispatch();
  // Select getLoggedInUser state

  // const user = store.getState().loginUser;
  const user = useSelector((state) => state.loginUser);
  
  const resultDiscover = useSelector((state) => state.getAllDicover);
  const store = useStore();

  const {loading, error, dicoverDatas} = resultDiscover;

  useEffect(() => {
    if(user.access_token){
    console.log("access_token", user.access_token);
      dispatch(getAllDiscoverDataAction(user.access_token));
    }
    console.log('user', user);
    if (!loading) {
      console.log('dicoverDatas', dicoverDatas);
    }
  }, [user.access_token]);



  return (
    <>
      <Header title="Khalidya, Abu Dhabi" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          {dicoverDatas && dicoverDatas.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <ScrollView showsHorizontalScrollIndicator={false}>
                {dicoverDatas.map((item_data, index) => (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        margin: 5,
                      }}>
                      <Title>{item_data.TagName}</Title>
                      <Button
                        labelStyle={{fontSize: 12}}
                        onPress={() =>
                          props.navigation.push('CategoryDetails', 'Near By')
                        }
                        color={PT_COLORS.primaryBlack}>
                        {'More >'}
                      </Button>
                    </View>
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}>
                      {item_data['Packages'].map((item, index) => {
                        console.log(index, item.RetaurantName);
                        return (
                          <ProductCard
                            key={item.RestaurantSlug}
                            productImg={{uri: item.PackageImage}}
                            restaurantName={item.RetaurantName}
                            logoImg={{uri: item.RetaurantLogo}}
                            item={item}
                            onPress={() =>
                              props.navigation.navigate('ProductDetails', {"item_data": item_data})
                            }
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                ))}
                {/* <ProductCard
                corner
                onPress={() =>
                  props.navigation.push('ProductDetails', 'Product Details')
                }
              />
              <ProductCard corner />
              <ProductCard corner /> */}
              </ScrollView>

              {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
            </ScrollView> */}
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
