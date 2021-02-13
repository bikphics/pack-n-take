import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {PTButton, PTTextInput, PTTextInputS} from '../components';
import {PT_COLORS} from '../config';
import {useAppContext} from '../config/AppContext';

import {Formik, Field} from 'formik';
import {loginUser} from '../redux/actions/authAction';

import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-community/async-storage';

const signInValidationSchema = yup.object().shape({
  useremail: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  userpassword: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Passowrd must be at least ${min} characters`)
    .required('Password is required'),
});

const SignIn = (props) => {
  const {login} = useAppContext();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.loginUser);
  const {loading, error, user} = userLogin;

  useEffect(() => {
    console.log('userLogin===', userLogin);
  }, [userLogin]);


  const storeData = async () => {
    try {
      console.log("coming");
      await AsyncStorage.setItem('@token', user.access_token);
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      
      login()
     
    } catch (e) {
      console.log('Errrrr', e);
    }
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.signUpHeadeing}>Pack & Take</Text>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 24,
          }}>
          Sign In
        </Text>
        <View style={styles.formContainer}>
          <Formik
            validationSchema={signInValidationSchema}
            initialValues={{
              useremail: '',
              userpassword: '',
            }}
            onSubmit={(values) => {
              dispatch(loginUser(values));
              
              if (user.UserId) {
                console.log('exits', user.access_token);
                storeData()
              }
            }}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={PTTextInputS}
                  name="useremail"
                  keyboardType="email-address"
                  label="Email"
                />

                <Field
                  component={PTTextInputS}
                  name="userpassword"
                  secureTextEntry
                  label="Password"
                />
                {/* opacity={isValid ? 0.2 : 1} */}
                <View style={styles.wrapper}>
                  <PTButton
                    style={styles.signupBtn}
                    onPress={handleSubmit}
                    title="Sign In"
                    buttonBackgroundColor={isValid ? '#333' : '#d3d3d3'}
                    buttonTextColor="#fff"
                    opacity={0.2}
                  />
                </View>
              </>
            )}
          </Formik>

          {/* <View style={styles.inputWrapper}>
            <PTTextInput label="Email" />
          </View>
          <View style={styles.inputWrapper}>
            <PTTextInput label="Password" />
          </View>
          <View style={styles.wrapper}>
            <PTButton
              style={styles.signupBtn}
              onPress={login}
              title="Sign In"
              buttonBackgroundColor="#333"
              buttonTextColor="#fff"
            />
          </View> */}
          <TouchableOpacity style={styles.wrapper} onPress={() => {}}>
            <Text style={{textAlign: 'center', color: PT_COLORS.primaryGrey}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <View style={styles.wrapper}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 32,
                color: PT_COLORS.primaryGrey,
              }}>
              - OR -
            </Text>
          </View>
          <View style={styles.wrapper}>
            <PTButton
              style={styles.signupBtn}
              onPress={() => {
                console.log('Pressed Apple');
              }}
              title="Continue With Apple"
              buttonBackgroundColor="#000"
              buttonTextColor="#fff"
            />
          </View>
          <View style={styles.wrapper}>
            <PTButton
              style={styles.signupBtn}
              onPress={() => {
                console.log('Pressed Apple');
              }}
              title="Continue With Facebook"
              buttonBackgroundColor="#4267B2"
              buttonTextColor="#fff"
            />
          </View>
          <View style={styles.wrapper}>
            <View style={styles.footerContainer}>
              <Text>Don't have an account</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SignUp');
                }}>
                <Text>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PT_COLORS.secondaryLight,
  },
  signUpHeadeing: {
    fontSize: 35,
    textAlign: 'center',
    marginVertical: 30,
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  wrapper: {
    marginVertical: 2,
  },
  inputWrapper: {
    marginVertical: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
