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
import {PT_COLORS} from '../../config';
import {SvgUri} from 'react-native-svg';
import {width} from '../../config/Style';
const ProductCard = ({
  productImg,
  cardStyle,
  corner,
  onPress,
  priceTag,
  isCentered,
  restaurantName,
  logoImg,
  isStoreCard,
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
        <View style={styles.cardWrapper}>
          <View
            style={{
              ...styles.fdRow,
              ...logoStyle,
            }}>
            {!logoImg ? (
              <Image source={LOGO} style={{borderRadius: 40, ...logoSize}} />
            ) : (
              <SvgUri width="100%" height="100%" logoImg />
            )}
          </View>
          <View style={styles.contentWrapper}>
            <View style={styles.logoWrapper}>
              <AntDesign name="hearto" color={'#ddd'} size={20} />
            </View>
            {!isStoreCard ? (
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{paddingTop: 20, paddingLeft: 10, flex: 4}}>
                  <Text style={styles.cardTitle}>
                    {restaurantName ? restaurantName : 'Steakhouse Khalidia'}
                  </Text>
                  <Text style={{color: '#000', fontSize: 13}}>
                    Inside The Package
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 5}}>
                    <View
                      style={{
                        padding: 5,
                        backgroundColor: '#AD4132',
                        marginRight: 10,
                        borderRadius: 5,
                      }}>
                      <Text style={{color: '#e9ecef', fontSize: 11}}>
                        Steak
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: 5,
                        backgroundColor: '#F4AB2E',
                        marginRight: 10,
                        borderRadius: 5,
                      }}>
                      <Text style={{color: '#e9ecef', fontSize: 11}}>
                        Steak
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: 5,
                        backgroundColor: '#56733C',
                        marginRight: 10,
                        borderRadius: 5,
                      }}>
                      <Text style={{color: '#e9ecef', fontSize: 11}}>
                        Steak
                      </Text>
                    </View>
                    <View
                      style={{
                        padding: 5,
                        backgroundColor: '#56733C',
                        marginRight: 10,
                        borderRadius: 5,
                      }}>
                      <Text style={{color: '#e9ecef', fontSize: 11}}>
                        Steak
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.noteStyle}>Collect directly-250m</Text>
                </View>
                <View style={styles.btnWrapper}>
                  <View style={styles.itemLeftBtn}>
                    <Text style={styles.itemLeftBtnText}>5+ Left</Text>
                  </View>
                  {!priceTag && (
                    <View style={styles.priceBtn}>
                      <View>
                        <Text style={styles.priceBtnSubtitle}>AED 40.00</Text>
                      </View>
                      <View>
                        <Text style={styles.priceBtnTitle}>AED 20.00</Text>
                      </View>
                    </View>
                  )}
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
                    Steak House-Khalidya
                  </Text>
                </View>
                <View style={{paddingTop: 2, paddingLeft: 10}}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                    }}>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
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
  cardWrapper: {
    width: '100%',
    height: 300,
    backgroundColor: '#000000a0',
  },
  contentWrapper: {
    width: '100%',
    height: '48%',
    backgroundColor: '#e9ecef',
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative',
  },
  logoWrapper: {
    backgroundColor: PT_COLORS.secondaryBlack,
    padding: 8,
    borderRadius: 20,
    position: 'absolute',
    top: -18,
    left: 14,
  },
  cardTitle: {
    color: PT_COLORS.secondaryBlack,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  itemLeftBtn: {
    backgroundColor: PT_COLORS.secondaryBlack,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'center',
  },
  itemLeftBtnText: {
    color: '#ddd',
    fontSize: 12,
  },
  priceBtn: {
    backgroundColor: PT_COLORS.secondaryBlack,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  priceBtnTitle: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  priceBtnSubtitle: {
    color: '#ddd',
    textAlign: 'center',
    fontSize: 12,
  },
  btnWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  noteStyle: {
    color: '#888',
    fontSize: 12,
    paddingVertical: 10,
  },
  fdRow: {
    flex: 1,
    flexDirection: 'row',
  },
});
