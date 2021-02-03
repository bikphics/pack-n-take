import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LOGO, WELCOME_IMG} from '../../assets';
import {width} from '../../config/Style';
const ProductCard = ({
  productImg,
  cardStyle,
  corner,
  onPress,
  priceTag,
  isCentered,
}) => {
  const logoStyle = corner
    ? {justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10}
    : {justifyContent: 'center', alignItems: 'center'};
  const logoSize = corner ? {width: 40, height: 40} : {width: 60, height: 60};
  const cardMargin = isCentered
    ? {marginHorizontal: 12}
    : {marginRight: 25, marginLeft: 5};
  return (
    <TouchableOpacity
      style={{...styles.cardStyle, ...cardStyle, ...cardMargin}}
      onPress={onPress}>
      <ImageBackground source={productImg || WELCOME_IMG} style={styles.image}>
        <View
          style={{width: '100%', height: 300, backgroundColor: '#000000a0'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              ...logoStyle,
            }}>
            <Image source={LOGO} style={{borderRadius: 40, ...logoSize}} />
          </View>
          <View
            style={{
              width: '100%',
              height: '48%',
              backgroundColor: '#e9ecef',
              padding: 5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: 'relative',
            }}>
            <View
              style={{
                backgroundColor: '#394047',
                padding: 8,
                borderRadius: 20,
                position: 'absolute',
                top: -18,
                left: 14,
              }}>
              <AntDesign name="hearto" color={'#ddd'} size={20} />
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{paddingTop: 20, paddingLeft: 10, flex: 4}}>
                <Text
                  style={{
                    color: '#212529',
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginBottom: 7,
                  }}>
                  Steak House-Khalidya
                </Text>
                <Text style={{color: '#000', fontSize: 11}}>
                  Inside The Package
                </Text>
                <View
                  style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: '#AD4132',
                      marginRight: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: '#F8F9FA', fontSize: 11}}>Steak</Text>
                  </View>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: '#F4AB2E',
                      marginRight: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: '#F8F9FA', fontSize: 11}}>Steak</Text>
                  </View>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: '#56733C',
                      marginRight: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: '#F8F9FA', fontSize: 11}}>Steak</Text>
                  </View>
                  <View
                    style={{
                      padding: 5,
                      backgroundColor: '#56733C',
                      marginRight: 10,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: '#F8F9FA', fontSize: 11}}>Steak</Text>
                  </View>
                </View>
                <Text
                  style={{color: '#888', fontSize: 12, paddingVertical: 10}}>
                  Collect directly-250m
                </Text>
              </View>
              <View style={{flex: 2, justifyContent: 'flex-start'}}>
                <View
                  style={{
                    backgroundColor: '#394047',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    marginTop: 25,
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    borderRadius: 5,
                    alignSelf: 'center',
                  }}>
                  <Text style={{color: '#ddd', fontSize: 10}}>5+ Left</Text>
                </View>
                {!priceTag && (
                  <View
                    style={{
                      backgroundColor: '#394047',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignSelf: 'center',
                      marginTop: 15,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 5,
                    }}>
                    <View>
                      <Text
                        style={{
                          color: '#ddd',
                          textAlign: 'center',
                          fontSize: 12,
                        }}>
                        AED 40.00
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color: '#ddd',
                          fontSize: 16,
                          marginTop: 10,
                          textAlign: 'center',
                        }}>
                        AED 20.00
                      </Text>
                    </View>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'center',
  },
  cardStyle: {
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 6,
    overflow: 'hidden',
    margin: 0,
    width: width - 80,
    alignSelf: 'center',
    marginTop: 8,
  },
});
