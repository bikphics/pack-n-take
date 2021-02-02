import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {Button, Card, Title, Text, List, Subheading} from 'react-native-paper';
import {BAG, EDIT, SHOP, MAP, STAR} from '../assets';
import {Header} from '../components';
import {COLORS, PT_COLORS} from '../config';

const PastOrderReviewDetails = (props) => {
  return (
    <>
      <Header
        title="Order Status"
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => props.navigation.goBack(),
        }}
        hideIcons
        hideLocationRange
      />
      <View style={{backgroundColor: COLORS.APP_BODY, flex: 1}}>
        <ScrollView>
          {/* Order Status Card */}
          <Card style={styles.card}>
            <Card.Title title="Order Status" style={styles.cardTitle} />
            <Card.Content>
              <View style={styles.cardRow}>
                <MCIcons name="timer-sand" color="#FCAF2C" size={20} />
                <Title style={{color: '#FCAF2C'}}>{'Pending'}</Title>
              </View>
              <Button
                mode="contained"
                color={PT_COLORS.primaryDark}
                style={{alignSelf: 'center'}}>
                TJ2L
              </Button>
              <View style={styles.cardRow}>
                <Text style={{color: '#212529'}}>{'Order ID:'}</Text>
                <Text style={{color: '#212529'}}>{'tkl23mh4'}</Text>
              </View>
            </Card.Content>
          </Card>

          {/* Order Details Card */}
          <Card style={styles.card}>
            <Card.Title title="Order Details" style={styles.cardTitle} />
            <Card.Content>
              <List.Item
                onPress={() => {}}
                title="Food Package"
                left={(props) => (
                  <View
                    style={{
                      backgroundColor: '#495057',
                      borderRadius: 17,
                      height: 25,
                      width: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: 4,
                    }}>
                    <Text style={{color: '#F8F9FA'}}>1x</Text>
                  </View>
                )}
                style={{
                  marginTop: 10,
                }}
              />
              <View
                style={{
                  ...styles.cardRow,
                  ...styles.borderBottom,
                  justifyContent: 'space-between',
                }}>
                <Button color={'#47525E'} uppercase={false}>
                  Total
                </Button>

                <Button color={'#47525E'} uppercase={false}>
                  AED 20.00
                </Button>
              </View>
              <List.Item
                onPress={() => {}}
                title="Steakhouse - Khalidya, Abu Dhabi"
                left={(props) => (
                  <Image
                    source={SHOP}
                    style={{
                      resizeMode: 'contain',
                      width: 35,
                      height: 35,
                    }}
                  />
                )}
                right={(props) => (
                  <Ionicons
                    {...props}
                    size={25}
                    name="chevron-forward-outline"
                    style={{
                      marginTop: 4,
                    }}
                  />
                )}
                style={styles.borderBottom}
              />

              <List.Item
                onPress={() => {}}
                title="Inside The Package"
                left={(props) => (
                  <Image
                    source={BAG}
                    style={{
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                      marginTop: 4,
                      marginLeft: 5,
                    }}
                  />
                )}
                style={{marginTop: 15}}
              />
              <View
                style={{
                  ...styles.cardRow,
                  ...styles.borderBottom,
                  justifyContent: 'space-evenly',
                }}>
                <Button mode="contained" color={'#AD4132'} uppercase={false}>
                  Steak
                </Button>
                <Button mode="contained" color={'#F4AB2E'} uppercase={false}>
                  Chicken
                </Button>
                <Button mode="contained" color={'#56733C'} uppercase={false}>
                  Salade
                </Button>
                <Button mode="contained" color={'#56733C'} uppercase={false}>
                  Fries
                </Button>
              </View>
              <List.Item
                onPress={() => {}}
                title="Personal Note"
                left={(props) => (
                  <Image
                    source={EDIT}
                    style={{
                      resizeMode: 'contain',
                      width: 25,
                      height: 25,
                      marginTop: 4,
                    }}
                  />
                )}
                style={{marginTop: 10}}
              />
              <Subheading style={{paddingHorizontal: 15}}>
                I have multiple food allergies and would like to know if the
                kitchen would be able to cater to them. My allergies include:
                Sesame seeds, Peanuts, Tree nuts, Pine nuts, Soy, Poppy Seeds,
                Sunflower seeds.
              </Subheading>
            </Card.Content>
          </Card>
          {/* Store Location Card */}
          <Card style={styles.card}>
            <Card.Title title="Package Review" style={styles.cardTitle} />
            <Card.Content>
              <Subheading style={{paddingVertical: 15}}>
                How was your experience with the store?
              </Subheading>

              <View style={styles.cardRow}>
                <Image style={styles.ratingsIcon} source={STAR} />
                <Image style={styles.ratingsIcon} source={STAR} />
                <Image style={styles.ratingsIcon} source={STAR} />
                <Image style={styles.ratingsIcon} source={STAR} />
                <Image style={styles.ratingsIcon} source={STAR} />
              </View>
            </Card.Content>
          </Card>
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
      </View>
    </>
  );
};

export default PastOrderReviewDetails;

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  cardTitle: {
    borderBottomColor: '#D2DAE6',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingLeft: 25,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  borderBottom: {
    borderBottomColor: '#D2DAE6',
    borderBottomWidth: 1,
  },
  ratingsIcon: {
    height: 30,
    width: 30,
    marginRight: 15,
  },
});
