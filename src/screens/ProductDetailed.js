import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  Modal,
  TextInput,
  BackHandler,
} from 'react-native';
import {LOGO, WELCOME_IMG} from '../assets';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width} from '../config/Style';
import {ScrollView} from 'react-native';
import {ProductCard} from '../components';
import {APPLE_PAY, MASTERCARD, VISA, CASH_ON_DELIVERY} from '../assets';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Card, Text, List} from 'react-native-paper';
import {MAP} from '../assets';

const ProductDetailed = (props) => {
  const MIN_HEIGHT = Platform.OS === 'ios' ? 120 : 80;
  const MAX_HEIGHT = 420;

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => BackHandler.removeEventListener();
  }, []);

  const backAction = () => {
    modalClose();
    console.log('Back Button pressed');
    return true;
  };

  const handleModalClick = () => {
    setIsModalVisible(true);
  };

  const modalClose = () => {
    setIsModalVisible(false);
  };

  BackHandler.addEventListener('hardwareBackPress', backAction);

  const hideBuyNow = props?.route?.params?.hideBuyNow || false;
  return (
    <>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={isModalVisible}>
        <View
          onPress={modalClose}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#3333339e',
          }}>
          <View
            style={{
              width: '100%',
              height: '88%',
              backgroundColor: '#fff',
              padding: 5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: 'relative',
              bottom: 0,
            }}>
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
                      <Image source={VISA} style={{width: 25, height: 25}} />
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
              <TouchableOpacity onPress={modalClose}>
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
          </View>
        </View>
      </Modal>
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        renderTouchableFixedForeground={() => (
          <View style={{width: '100%', height: 420}}>
            <ImageBackground source={WELCOME_IMG} style={styles.image}>
              <View
                style={{
                  width: '100%',
                  height: 420,
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
                    <AntDesign name="hearto" color={'#ddd'} size={32} />
                  </View>
                </View>
                <View
                  style={{
                    height: 120,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 20,
                    marginBottom: 15,
                  }}>
                  <Image
                    style={{height: 75, width: 75, borderRadius: 50}}
                    source={LOGO}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    height: '40%',
                    backgroundColor: '#E9ECEF',
                    padding: 5,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: 'relative',
                    bottom: 0,
                  }}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                      style={{paddingTop: 20, paddingHorizontal: 10, flex: 4}}>
                      <Text
                        style={{
                          color: '#000',
                          fontSize: 20,
                          fontWeight: 'bold',
                        }}>
                        Steak House
                      </Text>
                      <Text
                        style={{
                          color: '#212529',
                          fontSize: 15,
                          paddingVertical: 4,
                        }}>
                        A steakhouse, steak house, or chophouse is a restaurant
                        that specializes in steaks and chops. Modern steakhouses
                        may also carry other cuts of meat including poultry,
                        roast prime rib, and veal, as well as fish and other
                        seafood.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        )}>
        <TriggeringView>
          <ScrollView showsVerticalScrollIndicator={false}>
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
            {/* Store Location Card */}
            <Card style={styles.card}>
              <Card.Title title="Store Location" style={styles.cardTitle} />
              <Card.Content>
                <Image source={MAP} />
              </Card.Content>
            </Card>
            {/* Contact Card */}
            <Card style={styles.card}>
              <Card.Title title="Contact" style={styles.cardTitle} />
              <Card.Content>
                <List.Item
                  left={() => (
                    <Ionicons
                      style={{
                        color: '#212529',
                        marginTop: 10,
                      }}
                      size={14}
                      name={'globe-outline'}
                    />
                  )}
                  title="www.steakhouse.com"
                />
                <List.Item
                  left={() => (
                    <FontAwesome
                      style={{
                        color: '#212529',
                        marginTop: 10,
                      }}
                      size={14}
                      name={'phone'}
                    />
                  )}
                  title="00971 2 6165456"
                />
                <List.Item
                  left={() => (
                    <FontAwesome
                      style={{
                        color: '#212529',
                        marginTop: 10,
                      }}
                      size={14}
                      name={'envelope-o'}
                    />
                  )}
                  title="info@Steakhouse.com"
                />
                <List.Item
                  left={() => (
                    <FontAwesome
                      style={{
                        marginTop: 10,
                        color: '#d7515e',
                      }}
                      size={14}
                      name={'instagram'}
                    />
                  )}
                  title="Steakhouse"
                />
                <List.Item
                  left={() => (
                    <FontAwesome
                      style={{
                        marginTop: 10,
                        color: '#0269e3',
                      }}
                      size={14}
                      name={'facebook-square'}
                    />
                  )}
                  title="Steakhouse"
                />
              </Card.Content>
            </Card>
          </ScrollView>
        </TriggeringView>
      </ImageHeaderScrollView>

      {!hideBuyNow && (
        <View
          style={{
            width: '100%',
            backgroundColor: '#eee',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={handleModalClick}>
            <View
              style={{
                width: width - 40,
                backgroundColor: '#394047',
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
      )}
    </>
  );
};

export default ProductDetailed;

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
  card: {
    backgroundColor: '#F8F9FA',
    marginTop: 35,
  },
});
