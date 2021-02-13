import React, {useState, useEffect, useRef} from 'react';
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
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LOGO, WELCOME_IMG} from '../assets';
import {width} from '../config/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native';
import {ProductCard} from '../components';
import {APPLE_PAY, MASTERCARD, VISA, CASH_ON_DELIVERY} from '../assets';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

const ProductDetails = (props) => {
  const MIN_HEIGHT = Platform.OS === 'ios' ? 120 : 80;
  const MAX_HEIGHT = 350;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const scroll = useRef(new Animated.Value(0)).current;

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

  // Animation Codes

  const renderContent = (label) => (
    <View style={styles.content}>
      <Text>{label}</Text>
    </View>
  );

  const renderForeground = () => {
    const iconOpacity = scroll.interpolate({
      inputRange: [0, 30, 50],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const titleOpacity = scroll.interpolate({
      inputRange: [0, 50, 70],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
    });
    const subTitleOpacity = scroll.interpolate({
      inputRange: [0, 60, 80],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
    });
    const lowerOpacity = scroll.interpolate({
      inputRange: [0, 80, 100],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
    });
    const lowerBackgroundOpacity = scroll.interpolate({
      inputRange: [0, 100, 120],
      outputRange: [1, 0.5, 0],
      extrapolate: 'clamp',
    });

    return (
      <ImageBackground
        source={WELCOME_IMG}
        style={[styles.image, styles.foreground]}>
        <Animated.View
          style={{
            width: '100%',
            height: 360,
            backgroundColor: '#000000a0',
          }}>
          <Animated.View
            style={{
              width: '100%',
              height: '40%',
              backgroundColor: '#e9ecef',
              padding: 5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: 'absolute',
              bottom: 0,
              opacity: lowerBackgroundOpacity,
            }}>
            <Animated.View
              style={{
                backgroundColor: '#333',
                padding: 8,
                borderRadius: 20,
                position: 'absolute',
                top: -18,
                left: 14,
                opacity: iconOpacity,
              }}>
              <AntDesign name="hearto" color={'#ddd'} size={20} />
            </Animated.View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{paddingTop: 20, paddingLeft: 10, flex: 4}}>
                <Animated.Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 12,
                    opacity: titleOpacity,
                  }}>
                  Steak House-Khalidya
                </Animated.Text>
                <Animated.Text
                  style={{color: '#000', opacity: subTitleOpacity}}>
                  What you could Get
                </Animated.Text>
                <Animated.Text
                  style={{
                    color: '#888',
                    fontSize: 12,
                    paddingVertical: 14,
                    opacity: lowerOpacity,
                  }}>
                  Collect directly-250m
                </Animated.Text>
              </View>
              <View style={{flex: 2, justifyContent: 'center'}}>
                <Animated.View
                  style={{
                    backgroundColor: '#394047',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: 3,
                    paddingHorizontal: 7,
                    paddingVertical: 5,
                    borderRadius: 5,
                    opacity: titleOpacity,
                  }}>
                  <Text style={{color: '#ddd'}}>5+ Left</Text>
                </Animated.View>
                <Animated.View
                  style={{
                    backgroundColor: '#394047',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignSelf: 'center',
                    marginTop: 5,
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    borderRadius: 5,
                    opacity: lowerOpacity,
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
                </Animated.View>
              </View>
            </View>
          </Animated.View>
        </Animated.View>
      </ImageBackground>
    );
  };

  const renderHeader = () => {
    const opacity = scroll.interpolate({
      inputRange: [0, 160, 210],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    const backgroundAnimation = scroll.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
    });
    const backgroundImageOpacity = scroll.interpolate({
      inputRange: [0, 190, 220],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View>
        <Animated.View style={{opacity: opacity}}>
          <Image source={WELCOME_IMG} style={styles.headerImage} />
          <Animated.View
            style={{
              width: '100%',
              backgroundColor: '#000000a0',
              zIndex: 3,
              position: 'absolute',
              height: 70,
            }}></Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            styles.headerWrapper,
            {opacity: backgroundAnimation, zIndex: 4},
          ]}>
          <View>
            <Ionicons
              onPress={() => props.navigation.goBack()}
              name="chevron-back-circle"
              size={40}
              color="white"
              style={{zIndex: 5}}></Ionicons>
          </View>
          <Animated.View style={{opacity}}>
            <Text style={styles.headerTitle}>Steak House-Khalidya</Text>
          </Animated.View>
          <View>
            <Image
              source={LOGO}
              style={{borderRadius: 40, height: 40, width: 40}}
            />
          </View>
        </Animated.View>
      </Animated.View>
    );
  };
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
                        borderColor: '#394047',
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
                        borderColor: '#394047',
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
                        backgroundColor: '#394047',
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

      <StickyParallaxHeader
        foreground={renderForeground()}
        transparentHeader={true}
        header={renderHeader()}
        parallaxHeight={350}
        headerHeight={70}
        headerSize={() => {}}
        onEndReached={() => {}}
        scrollEvent={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {useNativeDriver: false},
        )}
        tabTextStyle={styles.tabText}
        tabTextContainerStyle={styles.tabTextContainerStyle}
        tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
        tabsContainerBackgroundColor={'red'}
        tabsWrapperStyle={styles.tabsWrapper}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              padding: 7,
              backgroundColor: '#e9ecef',
              marginTop: 35,
              paddingLeft: 15,
              paddingRight: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingTop: 10,
              }}>
              INSIDE THE PACKAGE
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: 8,
              }}>
              <View
                style={{
                  padding: 5,
                  backgroundColor: '#bf756c',
                  marginRight: 10,
                  borderRadius: 5,
                  marginLeft: 10,
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
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingTop: 20,
              }}>
              PREPAIRING & PACKAGING
            </Text>
            <Text style={{marginTop: 5, marginLeft: 10}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                paddingTop: 20,
              }}>
              INGREDIENTS & ALLERGENS
            </Text>
            <Text style={{marginTop: 5, marginLeft: 15}}>
              You can always write a note to the resturant while you process
              your purchant
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#e9ecef',
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
          <View style={{backgroundColor: '#e9ecef', paddingVertical: 10}}>
            <Text style={{fontSize: 16, fontWeight: '600', paddingLeft: 15}}>
              Khalidia - Abu Dhabi
            </Text>
          </View>
          <ScrollView
            horizontal
            backgroundColor="#e9ecef"
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

          <View style={{marginTop: 25, backgroundColor: '#e9ecef'}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 15,
                paddingTop: 10,
              }}>
              WHAT OTHERS ARE SAYING
            </Text>
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
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
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
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
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
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
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
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
            <View style={{flex: 1, flexDirection: 'row', paddingVertical: 10}}>
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
              backgroundColor: '#e9ecef',
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
      </StickyParallaxHeader>
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
    backgroundColor: '#e9ecef',
    marginTop: 35,
    paddingLeft: 5,
    paddingRight: 10,
  },
  content: {
    height: 1000,
    marginTop: 50,
  },
  foreground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#333',
  },
  message: {
    color: 'white',
    fontSize: 40,
    paddingTop: 24,
    paddingBottom: 7,
  },
  headerWrapper: {
    // backgroundColor: 'green',
    width: '100%',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
  },
  headerTitle: {
    fontSize: 16,
    color: 'white',
    margin: 12,
  },
  tabsWrapper: {
    paddingVertical: 12,
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',
    borderRadius: 18,
  },
  tabTextContainerActiveStyle: {
    backgroundColor: 'lightgreen',
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white',
  },
  headerImage: {
    position: 'absolute',
    height: 70,
    width: '100%',
  },
});
