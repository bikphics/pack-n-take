import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingTabsContainer = (props) => {
  return (
    <View
      style={{
        margin: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomColor: '#ccc',
          borderBottomWidth: 2,
          paddingBottom: 10,
          backgroundColor: '#fff',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <Text style={{fontSize: 18, marginLeft: 10}}>{props.title}</Text>
      </View>
      {props.children}
    </View>
  );
};

export default SettingTabsContainer;

const styles = StyleSheet.create({});
