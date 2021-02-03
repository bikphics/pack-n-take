import React from 'react';
import {TouchableOpacity, Text, View, Platform, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Header = (props) => {
  return (
    <View style={styles.headerContainerWrap}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => props.left && props.left.onPress()}
          style={styles.headerLeft}>
          {props.left && props.left.icon}
        </TouchableOpacity>
        <View style={styles.headerContentWrap}>
          <View style={styles.headerContent}>
            {!props.hideIcons && (
              <Ionicons name="location-outline" color="#fff" size={16} />
            )}
            <Text style={styles.headerTitle}>{props.title}</Text>
            {!props.hideIcons && (
              <Ionicons name="chevron-down-outline" color="#fff" size={16} />
            )}
          </View>
          <View style={styles.locationRangeWrap}>
            {!props.hideLocationRange && (
              <Text style={styles.locationRange}>With In 3 Km</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => props.right && props.right.onPress()}
          style={styles.headerRight}>
          {props.right && props.right.icon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headerContainerWrap: {
    backgroundColor: '#394047',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
  },
  headerLeft: {
    alignSelf: 'center',
    marginLeft: 10,
  },
  headerRight: {
    alignSelf: 'center',
    marginRight: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginTop: 1,
    backgroundColor: '#394047',
  },
  headerContentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationRange: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 12,
  },
  locationRangeWrap: {
    alignSelf: 'center',
    marginTop: 5,
  },
  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    marginHorizontal: 5,
  },
});
