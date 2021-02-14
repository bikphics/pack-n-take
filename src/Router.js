import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useAppContext} from './config/AppContext';
import {NavigationContainer} from '@react-navigation/native';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AnimatedSplash from 'react-native-animated-splash-screen';
import {PT_COLORS} from './config';
import {LOGO} from './assets';
import AsyncStorage from '@react-native-community/async-storage';

const Router = () => {
  const {user, loading} = useAppContext();
  const [userLoggedIn, setUserLoggedIn] = useState({});

  const authUser = async () => {
    try {
      // const token = await AsyncStorage.getItem('@token', user.access_token);
      const user = await AsyncStorage.getItem('@user', JSON.stringify(user));
      if (user.UserId) {
        return user;
      }
      return null;
    } catch (e) {
      console.log('Errrrr', e);
    }
  };

  useEffect(() => {
    console.log(loading, user);
  }, [user]);

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={loading}
      logoImage={LOGO}
      backgroundColor={PT_COLORS.splashColor}
      logoHeight={150}
      logoWidth={150}>
      <NavigationContainer>
        <StatusBar
          backgroundColor={PT_COLORS.secondaryBlack}
          barStyle="light-content"
        />
        {user ? <PrivateRoute /> : <PublicRoute />}
      </NavigationContainer>
    </AnimatedSplash>
  );
};

export default Router;
