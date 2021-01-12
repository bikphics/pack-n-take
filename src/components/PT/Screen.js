import React from 'react';
import {View} from 'react-native';

const Screen = ({style, children}) => (
  <View style={[style, {marginTop: 40, flex: 1}]}>{children}</View>
);

export default Screen;
