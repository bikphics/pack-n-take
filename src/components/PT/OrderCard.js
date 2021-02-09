import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {LOGO, RIGHT_ARROW, PENDING} from '../../assets';
import Badge from './Badge';

const OrderCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imgWrapper}>
        <Image style={{width: 60, height: 60, marginLeft: 8}} source={LOGO} />
      </View>
      <View style={styles.contentWrapper}>
        <View>
          <Text style={styles.hotelName}>Steak House - Khalidya</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.icon} source={PENDING} />
            <Text style={styles.orderStatus}>Pending</Text>
          </View>
          <Text style={styles.packageStatus}>Inside The Package</Text>
          <View style={styles.badgeContainer}>
            <Badge title="Rice" backgroundColor="#333" />
            <Badge title="Dal" backgroundColor="#222" />
            <Badge title="Chicken" backgroundColor="#111" />
            <Badge title="Curd" backgroundColor="394047" />
          </View>
          <Text style={styles.datetime}>
            Purchased On <Text>28/7/2010, 90.00AM</Text>
          </Text>
        </View>
      </View>
      <View style={styles.arrowWrapper}>
        <Image style={{width: 15, height: 15}} source={RIGHT_ARROW} />
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 138,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
  },
  imgWrapper: {
    flex: 2,
  },
  contentWrapper: {
    flex: 7,
    height: '100%',
    marginLeft: 12,
  },
  arrowWrapper: {
    flex: 1,
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  hotelName: {
    fontSize: 16,
    fontWeight: '700',
    paddingVertical: 2,
    color: '#222',
  },
  orderStatus: {
    color: 'orange',
    paddingVertical: 3,
    fontSize: 10,
  },
  packageStatus: {
    marginTop: 8,
    marginBottom: 4,
    fontWeight: '500',
    fontSize: 12,
  },
  datetime: {
    color: '#aaa',
    paddingTop: 10,
    fontSize: 12,
  },
  arrowWrapper: {
    justifyContent: 'center',
    marginRight: 5,
  },
  icon: {
    height: 15,
    width: 15,
    marginRight: 5,
  },
});
