import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Header, OrderCard} from '../components';
import {ScrollView, View, SafeAreaView} from 'react-native';
import PastOrderCard from '../components/PT/PastOrderCard';
const Tab = createMaterialTopTabNavigator();

const Orders = (props) => {
  return (
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
        hideIcons
        hideLocationRange
      />
      <SafeAreaView style={{flex: 1}}>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {
              borderBottomWidth: 3,
              borderBottomColor: '#333',
            },
          }}>
          <Tab.Screen
            name="Current"
            component={ProductCards}
            options={{title: 'Current'}}
          />
          <Tab.Screen
            name="Past"
            component={PastOrder}
            options={{title: 'Past'}}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default Orders;

function ProductCards(props) {
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderCard
          onPress={() => props.navigation.push('PreveiousOrderDetails', 'More')}
        />
        <OrderCard
          onPress={() => props.navigation.push('PreveiousOrderDetails', 'More')}
        />
        <OrderCard
          onPress={() => props.navigation.push('PreveiousOrderDetails', 'More')}
        />
        <OrderCard
          onPress={() => props.navigation.push('PreveiousOrderDetails', 'More')}
        />
      </ScrollView>
    </View>
  );
}
function PastOrder(props) {
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PastOrderCard
          onPress={() => props.navigation.push('PastOrderReviewDetail', 'More')}
        />
        <PastOrderCard
          onPress={() => props.navigation.push('PastOrderReviewDetail', 'More')}
        />
        <PastOrderCard
          onPress={() => props.navigation.push('PastOrderReviewDetail', 'More')}
        />
        <PastOrderCard
          onPress={() => props.navigation.push('PastOrderReviewDetail', 'More')}
        />
      </ScrollView>
    </View>
  );
}
