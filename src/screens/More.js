import React from 'react';
import {ScrollView, View, SafeAreaView, Image} from 'react-native';
import {List} from 'react-native-paper';
import {Header} from '../components';
import {useAppContext} from '../config/AppContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HELP,
  SETTINGS,
  PAYMENT_DETAILS,
  PRIVACY_POLICY,
  TERMS_CONDITIONS,
  ORDER,
} from '../assets';

import AsyncStorage from '@react-native-community/async-storage';


const More = (props) => {
  const {logout, handelExit} = useAppContext();

  async function handleLogout() {
    try {
      await AsyncStorage.removeItem('@user')
      logout();
    } catch {
      alert('Failed to log out');
    }
  }

  return (
    <>
      <Header title="More" hideIcons hideLocationRange />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, paddingVertical: 10}}>
          <ScrollView>
            <List.Item
              onPress={() => props.navigation.navigate('Settings')}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Settings"
              left={(props) => (
                <Image source={SETTINGS} style={{width: 30, height: 30}} />
              )}
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              onPress={() => props.navigation.navigate('Orders')}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Orders"
              left={(props) => (
                <Image source={ORDER} style={{width: 30, height: 30}} />
              )}
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              onPress={() => props.navigation.navigate('PaymentMethods')}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Payment Methods"
              left={(props) => (
                <Image
                  source={PAYMENT_DETAILS}
                  style={{width: 30, height: 30}}
                />
              )}
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Privacy Policy"
              left={(props) => (
                <Image
                  source={PRIVACY_POLICY}
                  style={{width: 30, height: 30}}
                />
              )}
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Terms & Conditions"
              left={(props) => (
                <Image
                  source={TERMS_CONDITIONS}
                  style={{width: 30, height: 30}}
                />
              )}
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Help Center"
              left={(props) => (
                <Image source={HELP} style={{width: 30, height: 30}} />
              )}
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
            <List.Item
              onPress={handleLogout}
              style={{
                backgroundColor: '#fff',
                marginVertical: 1,
                paddingVertical: 15,
              }}
              title="Log Out"
              left={(props) => (
                <Ionicons {...props} size={30} name="log-out-outline" />
              )}
              right={(props) => (
                <Ionicons {...props} size={24} name="chevron-forward-outline" />
              )}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default More;
