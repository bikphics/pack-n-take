import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {APPLE_PAY, MASTERCARD, VISA, CASH_ON_DELIVERY} from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LOGO, WELCOME_IMG} from '../assets';
import {width} from '../config/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
const OrderBooking = (props) => {
  return (
    <SafeAreaView>
      <View style={{width: '100%', height: '100%'}}>
        <ImageBackground source={WELCOME_IMG} style={styles.image}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#000000a0',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                paddingTop: 20,
              }}>
              <View>
                <Ionicons
                  onPress={() => props.navigation.goBack()}
                  name="chevron-back-circle"
                  size={35}
                  color="white"></Ionicons>
              </View>
              <View>
                <Image
                  source={LOGO}
                  style={{borderRadius: 40, height: 33, width: 33}}
                />
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: '98%',
                backgroundColor: '#fff',
                padding: 5,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                position: 'relative',
                bottom: 0,
              }}>
              <ScrollView>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{paddingTop: 10, paddingLeft: 10, flex: 4}}>
                    <Text
                      style={{
                        color: '#000',
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      Steak House-Khalidya
                    </Text>

                    <View
                      style={{
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignSelf: 'center',
                        marginTop: 5,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        borderRadius: 5,
                      }}>
                      <View>
                        <Text style={{textAlign: 'center', marginTop: 5}}>
                          Select Quantity
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingVertical: 5,
                          marginHorizontal: 5,
                          justifyContent: 'center',
                        }}>
                        <TouchableOpacity
                          style={{
                            marginHorizontal: 8,
                            borderRadius: 40,
                            height: 30,
                            width: 30,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#888',
                          }}>
                          <Text
                            style={{
                              color: '#ddd',
                              textAlign: 'center',
                              fontSize: 35,
                              marginBottom: 4,
                            }}>
                            -
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={{
                            borderColor: '#444',
                            marginHorizontal: 8,
                            borderRadius: 5,
                            padding: 5,
                          }}>
                          <Text
                            style={{
                              color: '#333',
                              textAlign: 'center',
                              fontSize: 30,
                            }}>
                            1
                          </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                          style={{
                            marginHorizontal: 8,
                            borderRadius: 40,
                            height: 30,
                            width: 30,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#333',
                          }}>
                          <Text
                            style={{
                              color: '#ddd',
                              textAlign: 'center',
                              fontSize: 25,
                              marginBottom: 4,
                            }}>
                            +
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingVertical: 10,
                          marginHorizontal: 3,
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderTopColor: '#333',
                          borderBottomColor: '#333',
                        }}>
                        <TouchableOpacity
                          style={{
                            borderColor: '#444',
                            paddingVertical: 5,
                            width: 160,
                            marginHorizontal: 8,
                            borderRadius: 5,
                            borderWidth: 1,
                          }}>
                          <Text style={{color: '#333', textAlign: 'center'}}>
                            Pick Up
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{
                            color: '#ddd',
                            backgroundColor: '#444',
                            textAlign: 'center',
                            paddingVertical: 5,
                            width: 160,
                            marginHorizontal: 8,
                            borderRadius: 5,
                          }}>
                          <Text style={{textAlign: 'center', color: '#fff'}}>
                            Delivery +AED7.0
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: 'column',
                          paddingVertical: 10,
                          marginHorizontal: 5,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text>Your Note</Text>
                        <TextInput
                          style={{
                            borderWidth: 1,
                            borderColor: '#333',
                            width: '90%',
                            height: 120,
                            marginTop: 8,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          paddingVertical: 10,
                          marginHorizontal: 3,
                          borderTopWidth: 1,
                          borderBottomWidth: 1,
                          borderTopColor: '#333',
                          borderBottomColor: '#333',
                          justifyContent: 'space-between',
                          marginTop: 8,
                        }}>
                        <View>
                          <Text>Total</Text>
                        </View>
                        <View>
                          <Text>AED 27.00</Text>
                        </View>
                      </View>

                      <View
                        style={{
                          paddingVertical: 5,
                          marginHorizontal: 3,
                          marginTop: 8,
                        }}>
                        <View>
                          <Text style={{textAlign: 'center'}}>
                            By Buying this package you agree to pack & Takes
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              textDecorationLine: 'underline',
                              textAlign: 'center',
                            }}>
                            Terms & Conditions
                          </Text>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: 'row',
                          paddingVertical: 5,
                          marginHorizontal: 5,
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            marginHorizontal: 8,
                          }}>
                          <Image
                            source={VISA}
                            style={{width: 25, height: 25}}
                          />
                        </View>
                        <View
                          style={{
                            marginHorizontal: 8,
                          }}>
                          <Image
                            source={MASTERCARD}
                            style={{width: 25, height: 25}}
                          />
                        </View>
                        <View
                          style={{
                            marginHorizontal: 8,
                          }}>
                          <Image
                            source={APPLE_PAY}
                            style={{width: 25, height: 25}}
                          />
                        </View>
                        <View
                          style={{
                            marginHorizontal: 8,
                            flexDirection: 'row',
                          }}>
                          <Image
                            source={CASH_ON_DELIVERY}
                            style={{width: 25, height: 25}}
                          />
                          <Text style={{fontSize: 10, marginTop: 4}}>
                            Cash on Pick up & Delivery
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      //   props.navigation.navigate('OrderBooking');
                      console.log('Order success!');
                    }}>
                    <View
                      style={{
                        width: width - 40,
                        backgroundColor: '#222',
                        paddingVertical: 14,
                        paddingHorizontal: 20,
                        marginVertical: 10,
                        borderRadius: 20,
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
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default OrderBooking;

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
    margin: 5,
    width: width - 45,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
