import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LOGO, WELCOME_IMG} from '../assets';
import {width} from '../config/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native';
import {ProductCard} from '../components';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

const ProductDetails = (props) => {
  const MIN_HEIGHT = Platform.OS === 'ios' ? 120 : 80;
  const MAX_HEIGHT = 350;
  return (
    <>
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        renderTouchableFixedForeground={() => (
          <View style={{width: '100%', height: 350}}>
            <ImageBackground source={WELCOME_IMG} style={styles.image}>
              <View
                style={{
                  width: '100%',
                  height: 360,
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
                      size={40}
                      color="white"></Ionicons>
                  </View>
                  <View>
                    <Image
                      source={LOGO}
                      style={{borderRadius: 40, height: 40, width: 40}}
                    />
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '40%',
                    backgroundColor: '#ddd',
                    padding: 5,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: 'relative',
                    bottom: 0,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#333',
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
                          color: '#000',
                          fontSize: 16,
                          fontWeight: 'bold',
                          marginBottom: 12,
                        }}>
                        Steak House-Khalidya
                      </Text>
                      <Text style={{color: '#000'}}>What you could Get</Text>
                      <Text
                        style={{
                          color: '#888',
                          fontSize: 12,
                          paddingVertical: 14,
                        }}>
                        Collect directly-250m
                      </Text>
                    </View>
                    <View style={{flex: 2, justifyContent: 'center'}}>
                      <View
                        style={{
                          backgroundColor: '#444',
                          justifyContent: 'center',
                          flexDirection: 'row',
                          alignSelf: 'center',
                          marginTop: 3,
                          paddingHorizontal: 7,
                          paddingVertical: 5,
                          borderRadius: 5,
                        }}>
                        <Text style={{color: '#ddd'}}>5+ Left</Text>
                      </View>
                      <View
                        style={{
                          backgroundColor: '#444',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignSelf: 'center',
                          marginTop: 5,
                          paddingHorizontal: 5,
                          paddingVertical: 5,
                          borderRadius: 5,
                        }}>
                        <View>
                          <Text style={{color: '#ddd', textAlign: 'center'}}>
                            AED 40.00
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: '#ddd',
                              fontSize: 20,
                              marginTop: 10,
                              textAlign: 'center',
                            }}>
                            AED 20.00
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}>
        <TriggeringView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                padding: 7,
                backgroundColor: '#ddd',
                marginTop: 35,
                paddingLeft: 15,
                paddingRight: 10,
              }}>
              <View>
                <Text style={{fontSize: 20, fontWeight: '700'}}>
                  Inside The Package
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 10,
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: '#bf756c',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: '#edcf98',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: '#839873',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
                <View
                  style={{
                    padding: 5,
                    backgroundColor: '#839873',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: '700', marginTop: 25}}>
                  PREPAIRING & PACKAGING
                </Text>
              </View>
              <View>
                <Text style={{marginTop: 10, marginLeft: 10}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: '700', marginTop: 15}}>
                  INGREDIENTS & ALLERGENS
                </Text>
              </View>
              <View>
                <Text style={{marginTop: 10, marginLeft: 10}}>
                  You can always write a note to the resturant while you process
                  your purchant.{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#ddd',
                marginTop: 25,
                paddingVertical: 5,
              }}>
              <Text style={{fontSize: 16, fontWeight: '600', paddingLeft: 15}}>
                HOW TO GET THERE
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: 250,
                backgroundColor: '#ccc',
              }}></View>
            <View style={{backgroundColor: '#ddd', paddingVertical: 5}}>
              <Text style={{fontSize: 16, fontWeight: '600', paddingLeft: 15}}>
                Khalidia - Abu Dhabi
              </Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 25}}>
              <ProductCard
                corner
                onPress={() =>
                  props.navigation.push('ProductDetails', 'Product Details')
                }
              />
              <ProductCard
                corner
                onPress={() =>
                  props.navigation.push('ProductDetails', 'Product Details')
                }
              />
              <ProductCard
                corner
                onPress={() =>
                  props.navigation.push('ProductDetails', 'Product Details')
                }
              />
            </ScrollView>

            <View style={{marginTop: 25, backgroundColor: '#ddd'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 15,
                  paddingTop: 10,
                }}>
                WHAT OTHERS ARE SAYING
              </Text>
              <View
                style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
                <View style={{flex: 2}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 30,
                      textAlign: 'right',
                    }}>
                    4.0/5
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    marginLeft: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons
                    name="star"
                    size={22}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={22}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={22}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={22}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star-outline"
                    size={22}
                    style={{marginHorizontal: 2}}></Ionicons>
                </View>
              </View>
              <View
                style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
                <View style={{flex: 2}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Quality
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    marginLeft: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star-outline"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                </View>
              </View>
              <View
                style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
                <View style={{flex: 2}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Quantity
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    marginLeft: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star-outline"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                </View>
              </View>
              <View
                style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
                <View style={{flex: 2}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Price
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    marginLeft: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star-outline"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                </View>
              </View>
              <View
                style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
                <View style={{flex: 2}}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 14,
                      textAlign: 'right',
                    }}>
                    Service
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    marginLeft: 60,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                  <Ionicons
                    name="star-outline"
                    size={20}
                    style={{marginHorizontal: 2}}></Ionicons>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 7,
                backgroundColor: '#ddd',
                marginTop: 35,
                paddingLeft: 15,
                paddingRight: 10,
              }}>
              <View>
                <Text style={{fontSize: 16, fontWeight: '700'}}>
                  WHAT NEED TO KNOW
                </Text>
              </View>
              <View>
                <Text style={{marginTop: 10}}>
                  You can always write a note to the resturant while you process
                  your purchant.{' '}
                </Text>
              </View>
            </View>
          </ScrollView>
        </TriggeringView>
      </ImageHeaderScrollView>

      <View
        style={{
          width: '100%',
          backgroundColor: '#eee',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('OrderBooking');
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
    </>
  );
};

export default ProductDetails;

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
