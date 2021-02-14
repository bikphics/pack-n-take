import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {CLOSE, STAR} from '../assets';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import axios from 'axios';
import {useAppContext} from '../config/AppContext';
import {PTButton} from '../components';
const Map = (props) => {
  const [marginButtom, setMarginButtom] = useState(1);
  const {user} = useAppContext();
  const [userLocation, setUserLocation] = useState({
    latitude: 20.3154293,
    longitude: 85.8180405,
  });

  const customMapStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'administrative.neighborhood',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.business',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#dadada',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'road.local',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [
        {
          color: '#eeeeee',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#c9c9c9',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
  ];

  const updateUserLocation = (location) => {
    console.log(location);
    axios
      .put(
        `https://www.packntake.com/api/auth/updateuserlocation?token=${user.access_token}`,
        {
          userid: user.UserId,
          userlat: location.latitude,
          userlng: location.longitude,
          radius: 800,
        },
      )
      .then((response) => {
        console.log(user);
        alert(
          `userlat ${response.data.UserLatitude} userLang ${response.data.UserLongitude}`,
        );
      })
      .catch((err) => console.log(err, location.latitude));
  };

  return (
    <>
      <View
        style={{
          height: 100,
          width: '100%',
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            width: '60%',
            flexWrap: 'wrap',
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 30,
          }}>
          Choose a location to see What's available
        </Text>
        <TouchableOpacity
          style={{position: 'absolute', top: 30, right: 10}}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image source={CLOSE} style={{width: 50, height: 50}} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 5}}>
        <MapView
          style={{width: '100%', height: '100%', marginBottom: marginButtom}}
          provider={PROVIDER_GOOGLE}
          customMapStyle={customMapStyle}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onMapReady={() => setMarginButtom(0)}
          onPress={(event) => {
            updateUserLocation(event.nativeEvent.coordinate);
          }}>
          <Marker
            coordinate={{latitude: 20.3154293, longitude: 85.8180405}}
            title="user location"
            description="Fetching User Current Location"
          />
        </MapView>
      </View>

      <View
        style={{
          flex: 2,
          height: 250,
          width: '100%',
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          alignItems: 'center',
        }}>
        <View style={{marginTop: 10}}>
          <PTButton
            title="Use My Current Location"
            buttonBackgroundColor="#333"
            width={350}
            opacity="1"
            onPress={() => {
              console.log('Fetching User current Location');
            }}
          />
        </View>
        <View>
          <PTButton
            title="Search For City"
            buttonBackgroundColor="#ccc"
            width={350}
            opacity="1"
            onPress={() => {
              console.log('Search For City');
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Map;

const styles = StyleSheet.create({});
