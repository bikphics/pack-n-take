import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
  Modal,
  TextInput,
  BackHandler,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LOGO, WELCOME_IMG} from '../assets';
import {width} from '../config/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native';
import {ProductCard} from '../components';
import {APPLE_PAY, MASTERCARD, VISA, CASH_ON_DELIVERY} from '../assets';
import {Card, Title, Subheading} from 'react-native-paper';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

const ProductDetails = (props) => {
  const MIN_HEIGHT = Platform.OS === 'ios' ? 120 : 80;
  const MAX_HEIGHT = 350;

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
            <Card style={styles.card}>
              <Card.Title
                title="PREPAIRING & PACKAGING"
                style={styles.cardTitle}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 8,
                  marginLeft: 25,
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
                    backgroundColor: '#394047',
                    marginRight: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: '#fff'}}>Steak</Text>
                </View>
              </View>
              {/* <View>
                <Text style={{fontSize: 20, fontWeight: '700', marginTop: 15}}>
                  PREPAIRING & PACKAGING
                </Text>
              </View>
              <View>
                <Text style={{marginTop: 5, marginLeft: 10}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 20, fontWeight: '700', marginTop: 10}}>
                  INGREDIENTS & ALLERGENS
                </Text>
              </View>
              <View>
                <Text style={{marginTop: 5, marginLeft: 10, paddingBottom: 5}}>
                  You can always write a note to the resturant while you process
                  your purchant.{' '}
                </Text>
              </View> */}

              <Card.Title
                title="PREPAIRING & PACKAGING"
                style={{marginTop: 15}}
              />
              <Card.Content>
                <Subheading style={{paddingVertical: 8}}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </Subheading>
              </Card.Content>
              <Card.Title
                title="PREPAIRING & PACKAGING"
                style={styles.cardTitle}
              />
              <Card.Content>
                <Subheading style={{paddingVertical: 8}}>
                  You can always write a note to the resturant while you process
                  your purchant.{' '}
                </Subheading>
              </Card.Content>
            </Card>
            <View
              style={{
                backgroundColor: '#F8F9FA',
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
            <View style={{backgroundColor: '#F8F9FA', paddingVertical: 10}}>
              <Text style={{fontSize: 16, fontWeight: '600', paddingLeft: 15}}>
                Khalidia - Abu Dhabi
              </Text>
            </View>
            <ScrollView
              horizontal
              backgroundColor="#F8F9FA"
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

            <View style={{marginTop: 25, backgroundColor: '#F8F9FA'}}>
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
                backgroundColor: '#F8F9FA',
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
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'center',
  },
  card: {
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 0,
    overflow: 'hidden',
    width: width,
    alignSelf: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#F8F9FA',
    marginTop: 35,
    paddingLeft: 5,
    paddingRight: 10,
  },
});
