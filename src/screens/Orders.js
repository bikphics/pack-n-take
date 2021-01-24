import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Header, OrderCard} from '../components';
import {ScrollView, View, SafeAreaView} from 'react-native';
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
      />
      <SafeAreaView style={{flex: 1}}>
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
      </SafeAreaView>
    </>
  );
};

export default Orders;

function ProductCards(props) {
  return (
    <View style={{flex: 1, padding: 10}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <OrderCard onPress={()=>props.navigation.push('PreveiousOrderDetails', 'More')} />
        <OrderCard onPress={()=>props.navigation.push('PreveiousOrderDetails', 'More')} />
        <OrderCard onPress={()=>props.navigation.push('PreveiousOrderDetails', 'More')} />
        <OrderCard onPress={()=>props.navigation.push('PreveiousOrderDetails', 'More')} />
        <OrderCard onPress={()=>props.navigation.push('PreveiousOrderDetails', 'More')} />

      </ScrollView>
    </View>
  );
}
