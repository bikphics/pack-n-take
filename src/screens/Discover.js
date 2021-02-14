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
import {useStore} from 'react-redux';

import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/PT/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import {useAppContext} from '../config/AppContext';
import Map from './Map';
const Discover = (props) => {
  const [discoverData, setDiscoverData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {user} = useAppContext();

  useEffect(() => {
    user?.hasOwnProperty('access_token') &&
      getResturantsData(user.access_token);
  }, [user]);

  const getResturantsData = (token) => {
    axios
      .get('https://www.packntake.com/api/discover', {
        params: {
          token: token,
        },
      })
      .then((response) => {
        setDiscoverData(response.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header
        title="Khalidya, Abu Dhabi"
        map={{
          onPress: () => {
            console.log('object');
            props.navigation.push('Map', '');
          },
        }}
      />
      <SafeAreaView style={{flex: 1}}>
        {discoverData.length === 0 ? (
          <Loader />
        ) : (
          <View style={{flex: 1}}>
            {/* {items.length > 0 ? ( */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {discoverData.map((category, index) => (
                <View key={index}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      margin: 5,
                    }}>
                    <Title>{category.TagName}</Title>
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
                    {category.Packages.map((packageItem, index) => (
                      <ProductCard
                        key={packageItem.PackageID}
                        corner
                        itemDetails={packageItem}
                        onPress={() =>
                          props.navigation.push('ProductDetails', {
                            itemId: packageItem.PackageID,
                          })
                        }
                      />
                    ))}
                  </ScrollView>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
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
