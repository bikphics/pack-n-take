import React from 'react';
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


  const authUser = async () => {
    try {
      console.log("coming");
      // const token = await AsyncStorage.getItem('@token', user.access_token);
       const user = await AsyncStorage.getItem('@user', JSON.stringify(user));
      
       console.log("router", user);
       if(user.UserId) {
          return user;
       }
     
       return null;
    } catch (e) {
      console.log('Errrrr', e);
    }
  };

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
        {authUser ? <PrivateRoute /> : <PublicRoute />}
      </NavigationContainer>
    </AnimatedSplash>
  );
};

export default Router;
