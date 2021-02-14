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
import {width} from '../../config/Style';
const ResturantsCard = ({
  productImg,
  cardStyle,
  corner,
  onPress,
  isStoreCard,
  itemDetails,
}) => {
  const logoStyle = corner
    ? {justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10}
    : {justifyContent: 'center', alignItems: 'center'};
  const logoSize = corner ? {width: 40, height: 40} : {width: 60, height: 60};
  return (
    <TouchableOpacity
      style={{...styles.cardStyle, ...cardStyle}}
      onPress={onPress}>
      <ImageBackground
        source={{uri: itemDetails.RestaurantImage}}
        style={styles.image}>
        <View
          style={{width: '100%', height: 370, backgroundColor: '#00000070'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              ...logoStyle,
            }}>
            <Image
              source={{
                uri: itemDetails.RetaurantLogo,
              }}
              style={{borderRadius: 40, ...logoSize}}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: '42%',
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
            {!isStoreCard ? (
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{paddingTop: 20, paddingLeft: 10, flex: 4}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 12,
                    }}>
                    {itemDetails.RetaurantName}
                  </Text>
                  <Text style={{color: '#000'}}>What you could Get</Text>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: 5,
                    }}>
                    {itemDetails.InsideThePackge.map(
                      (individualPackage, index) => (
                        <View
                          style={{
                            padding: 5,
                            backgroundColor: individualPackage.color,
                            marginRight: 10,
                            borderRadius: 5,
                          }}>
                          <Text style={{color: '#fff'}}>
                            {individualPackage.name}
                          </Text>
                        </View>
                      ),
                    )}
                  </View>
                  <Text
                    style={{color: '#888', fontSize: 12, paddingVertical: 14}}>
                    Collect directly-250m
                  </Text>
                </View>

                <View style={{flex: 2, justifyContent: 'center'}}>
                  <View
                    style={{
                      backgroundColor: '#394047',
                      justifyContent: 'center',
                      flexDirection: 'row',
                      alignSelf: 'center',
                      marginTop: 8,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 5,
                    }}>
                    <Text style={{color: '#ddd', fontSize: 10}}>
                      {itemDetails.PackageQuantityText} Left
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#394047',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignSelf: 'center',
                      marginTop: 15,
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                      borderRadius: 5,
                    }}>
                    <View>
                      <Text
                        style={{
                          color: '#ddd',
                          textAlign: 'center',
                          fontSize: 12,
                        }}>
                        AED {itemDetails.PackageFPrice}
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
                        AED {itemDetails.PackageSPrice}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View>
                <View style={{paddingTop: 20, paddingLeft: 10}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 4,
                    }}>
                    {itemDetails.RetaurantName}
                  </Text>
                </View>
                <View style={{paddingTop: 2, paddingLeft: 10}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                    }}>
                    {itemDetails.RestaurantDescription}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ResturantsCard;

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
    margin: 15,
    width: width - 50,
    alignSelf: 'center',
  },
});
