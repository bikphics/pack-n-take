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
const ProductCard = ({productImg, cardStyle, corner, onPress}) => {
  const logoStyle = corner
    ? {justifyContent: 'flex-start', alignItems: 'flex-start', padding: 10}
    : {justifyContent: 'center', alignItems: 'center'};
  const logoSize = corner ? {width: 40, height: 40} : {width: 60, height: 60};
  return (
    <TouchableOpacity style={{...styles.cardStyle, ...cardStyle}} onPress={onPress}>
      <ImageBackground source={productImg || WELCOME_IMG} style={styles.image}>
        <View
          style={{width: '100%', height: 370, backgroundColor: '#000000a0'}}>
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
              height: '42%',
              backgroundColor: '#ddd',
              padding: 5,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              position: 'relative',
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
                <View
                  style={{display: 'flex', flexDirection: 'row', marginTop: 5}}>
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
                <Text
                  style={{color: '#888', fontSize: 12, paddingVertical: 14}}>
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
                    marginTop: 8,
                    paddingHorizontal: 10,
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
                    marginTop: 15,
                    paddingHorizontal: 10,
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
