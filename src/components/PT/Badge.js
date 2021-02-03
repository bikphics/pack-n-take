import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Badge = ({title, backgroundColor}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        paddingHorizontal: 8,
        marginRight: 6,
        paddingVertical: 4,
        borderRadius: 4,
      }}>
      <Text style={{color: 'white', fontSize: 10}}>{title}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({});
