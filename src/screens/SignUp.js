import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Fragment,
} from 'react-native';
import {PTTextInputS, PTButton} from '../components';

import {PT_COLORS} from '../config';
import {useAppContext} from '../config/AppContext';
import {Formik, Field} from 'formik';

import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import {registerUser} from '../redux/actions/authAction';


const signUpValidationSchema = yup.object().shape({
  username: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  country: yup.string().required('Country is required'),
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
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password')], 'Passwords do not match')
  //   .required('Confirm password is required'),
});

const SignUp = (props) => {
  const {login} = useAppContext();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.registerUser);
  const {loading, error, user} = userRegister;
  useEffect(() => {
    console.log('userRegister===', userRegister);
  }, [userRegister]);


  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container} ß>
        <Text style={styles.signUpHeadeing}>Pack & Take</Text>

        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 20,
            fontSize: 24,
          }}>
          Sign Up
        </Text>
        <View style={styles.formContainer}>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              username: '',
              useremail: '',
              usernumber: '',
              userpassword: '',
              country: '',
            }}
            onSubmit={(values) => {
              console.log('values', values);
              dispatch(registerUser(values));

              if(user.UserId) {
                console.log("exits", user.access_token);
              login()
              }
            }}>
            {({handleSubmit, isValid, values}) => (
              <>
                <Field
                  component={PTTextInputS}
                  name="username"
                  label="Full Name"
                />
                <Field
                  component={PTTextInputS}
                  name="country"
                  label="Country"
                />

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

                <View style={styles.wrapper}>
                  {/* <Button
                    style={styles.signupBtn}
                    onPress={handleSubmit}
                    title="Create An Account"
                    buttonBackgroundColor="#333"
                    buttonTextColor="#fff"
                    disabled={!isValid || values.email === ''}
                  /> */}

                  <PTButton
                    style={styles.signupBtn}
                    onPress={handleSubmit}
                    title="Create An Account"
                    buttonBackgroundColor={isValid ? '#333' : '#d3d3d3'}
                    buttonTextColor="#fff"
                    opacity={isValid ? 0.2 : 1}
                  />
                </View>
              </>
            )}
          </Formik>

          {/* <View style={styles.wrapper}>
            <PTTextInput label="Full Name"  />
           
          </View>
          <View style={styles.wrapper}>
            <PTTextInput label="Country" />
          </View>
          <View style={styles.wrapper}>
            <PTTextInput label="Email" />
          </View>
          <View style={styles.wrapper}>
            <PTTextInput label="Password" />
          </View>
          <View style={styles.wrapper}>
            <PTButton
              style={styles.signupBtn}
              onPress={login}
              title="Create An Account"
              buttonBackgroundColor="#333"
              buttonTextColor="#fff"
            />
          </View> */}
          <View style={styles.wrapper}>
            <Text style={{textAlign: 'center'}}>
              By creating an account, you agree to our
              <Text
                style={{
                  marginLeft: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: '#333',
                }}>
                Terms
              </Text>
            </Text>
          </View>
          <View style={styles.wrapper}>
            <View style={styles.footerContainer}>
              <Text>Already Have An Account?</Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('SignIn');
                }}>
                <Text>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
    marginVertical: 15,
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  signupBtn: {
    width: '100%',
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
  },
});
