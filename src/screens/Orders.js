import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Header, OrderCard} from '../components';
import {ScrollView, View, SafeAreaView} from 'react-native';
import Screen from '../components/PT/Screen';
const Tab = createMaterialTopTabNavigator();

const Orders = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <Header
          title="Orders"
          left={{
            icon: (
              <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
            ),
            onPress: () => {
              props.navigation.goBack();
            },
          }}
        />
        <Screen>
          <Tab.Navigator>
            <Tab.Screen
              name="Current"
              component={ProductCards}
              options={{title: 'Current'}}
            />
            <Tab.Screen
              name="Past"
              component={ProductCards}
              options={{title: 'Past'}}
            />
          </Tab.Navigator>
        </Screen>
      </>
    </SafeAreaView>
  );
};

export default Orders;

function ProductCards() {
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </View>
  );
}
