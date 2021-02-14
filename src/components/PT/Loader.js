import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';

const Loader = () => {
  return (
    <View style={styles.loaderWrapper}>
      <ActivityIndicator size="large" color="#333" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
