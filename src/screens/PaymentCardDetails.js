import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LOGO, WELCOME_IMG} from '../assets';
import {width} from '../config/Style';
const PaymentCardDetails = () => {
    return (
        <>
        <Header
        title="Card Details"
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => {
            props.navigation.goBack();
          },
        }}
      />
      <View style={{padding: 20, backgroundColor: "#fff", marginTop: 35 }}>
        <View style={{paddingVertical: 20, }}>
            <Text style={{fontSize: 22}}>Mo Alloh</Text>
        </View>
        <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 22, fontWeight: "bold"}}>.... .... .... 2534</Text>
        </View>
        <View style={{paddingVertical: 10}}>
            <Text style={{fontSize: 16, fontSize: 20}} >06/24 </Text>
        </View>
      </View>
      <View style={{width: "100%", flexDirection: "row", justifyContent: "center"}}>
      <View
        style={{
          width: width-80,
          backgroundColor: "#f00",
          paddingVertical: 14,
          paddingHorizontal: 20,
          marginVertical: 20,
          borderRadius: 10,
            marginTop: 35
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 18,
          }}>
          BUY NOW
        </Text>
      </View>
      </View>
      </>
    )
}

export default PaymentCardDetails

const styles = StyleSheet.create({})
