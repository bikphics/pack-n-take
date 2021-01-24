import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import {List} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '../components';
import {APPLE_PAY, MASTERCARD, VISA, CASH_ON_DELIVERY} from '../assets';

const PaymentMethods = (props) => {
  return (
    <>
      <Header title="Payment Methods" />
      <SafeAreaView style={{flex: 1}}>
          <ScrollView>
        <View style={{flex: 1, marginTop: 20}}>
          <List.Item
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
              paddingLeft: 35,
            }}
            title="Your Payment Cards"
          />
          <List.Item
            onPress={() => props.navigation.navigate('PaymentCardDetails')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="....2534"
            left={(props) => (
              <Image source={APPLE_PAY} style={{width: 30, height: 30}} />
            )}
            right={(props) => (
              <Ionicons {...props} size={30} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            onPress={() => props.navigation.navigate('PaymentCardDetails')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="....1990"
            left={(props) => (
              <Image source={MASTERCARD} style={{width: 30, height: 30}} />
            )}
            right={(props) => (
              <Ionicons {...props} size={30} name="chevron-forward-outline" />
            )}
          />
        </View>

        <View style={{flex: 1,  marginTop: 35}}>
          <List.Item
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
              paddingLeft: 35,
            }}
            title="We Accept"
          />
          <List.Item
            onPress={() => props.navigation.navigate('PaymentCardDetails')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Visa Card"
            left={(props) => (
              <Image source={VISA} style={{width: 30, height: 30}} />
            )}
            right={(props) => (
              <Ionicons {...props} size={30} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            onPress={() => props.navigation.navigate('PaymentCardDetails')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Master Card"
            left={(props) => (
              <Image source={MASTERCARD} style={{width: 30, height: 30}} />
            )}
            right={(props) => (
              <Ionicons {...props} size={30} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            onPress={() => props.navigation.navigate('PaymentCardDetails')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="Apple Pay"
            left={(props) => (
              <Image source={APPLE_PAY} style={{width: 30, height: 30}} />
            )}
            right={(props) => (
              <Ionicons {...props} size={30} name="chevron-forward-outline" />
            )}
          />
          <List.Item
            onPress={() => props.navigation.navigate('PaymentCardDetails')}
            style={{
              backgroundColor: '#fff',
              marginVertical: 1,
              paddingVertical: 15,
            }}
            title="cash on pick up & DELIVERY"
            left={(props) => (
              <Image source={CASH_ON_DELIVERY} style={{width: 30, height: 30}} />
            )}
            right={(props) => (
              <Ionicons {...props} size={30} name="chevron-forward-outline" />
            )}
          />
        </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PaymentMethods;

const styles = StyleSheet.create({});
