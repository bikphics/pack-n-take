import React from 'react';
import {TouchableOpacity, Text, View, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = (props) => {
  return (
    <View
      style={{
        backgroundColor: '#333',
        top: 0,
        position: 'absolute',
        left: 0,
        right: 0,
        display: 'flex',
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          paddingVertical: 10,
          marginTop: 1,
          backgroundColor: '#333',
        }}>
        <TouchableOpacity
          onPress={() => {
            props.left && props.left.onPress();
          }}
          style={{alignSelf: 'center', marginLeft: 10}}>
          {props.left && props.left.icon}
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Ionicons name="location-outline" color="#fff" size={16} />
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 18,
                marginHorizontal: 5,
              }}>
              {props.title}
            </Text>
            <Ionicons name="chevron-down-outline" color="#fff" size={16} />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 12,
              }}>
              With In 3 Km
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
