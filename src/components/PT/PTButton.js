import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { width } from '../../config/Style';

const PTButton = ({onPress, title, buttonBackgroundColor, buttonTextColor, width}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: width,
          backgroundColor: buttonBackgroundColor,
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginVertical: 10,
          borderRadius: 8,
        }}>
        <Text
          style={{
            color: '#fff',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
          }}>
          {title ? title : 'Button'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PTButton;
