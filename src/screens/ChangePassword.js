import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Card} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {PT_COLORS} from '../config';
import {Header, PTTextInputS, PTButton} from '../components';
import AsyncStorage from '@react-native-community/async-storage';
import {useStore} from 'react-redux';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {changePasswordAction, getUserAction} from '../redux/actions/authAction';

const signInValidationSchema = yup.object().shape({
  userpassword: yup
  .string()
  .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
  .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
  .matches(/\d/, 'Password must have a number')
  .matches(
    /[!@#$%^&*()\-_"=+{}; :,<.>]/,
    'Password must have a special character',
  ),
  usernewpassword: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    ),
    userconfirmpassword: yup
    .string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    ),
});

const ChangePassword = (props) => {
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const dispatch = useDispatch();
  // Select getLoggedInUser state

  
  const resultData = useSelector((state) => state.changeUserPassword);
  const {loadingChangePassword, errorChangePassword, changeUser} = resultData;
  

    
  const resultUser = useSelector((state) => state.getUser);
  const {loadingUser, errorUser, user} = resultUser;

  const store = useStore();
  const userData = store.getState().loginUser;






  useEffect(() => {
    console.log("userData", userData);
 
    if(userData.hasOwnProperty('acceees_token')) {
      dispatch(getUserAction(userData.access_token))
    }

    if(!loadingUser) {
      console.log('user-----change password', user);
      console.log('user-----change password error', errorUser);


    }  
  }, [userData]);

  return (
    <>
      <Header
        title="Change Password"
        left={{
          icon: (
            <Ionicons name="chevron-back-outline" color={'#fff'} size={24} />
          ),
          onPress: () => {
            props.navigation.goBack();
          },
        }}
        hideIcons
        hideLocationRange
      />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{padding: 14}}>
          {
            loadingUser ? (<Text>Loading</Text>): 
            <Card>
            <Card.Title title="Change Password" />
            <Card.Content>
              <Formik
                validationSchema={signInValidationSchema}
                initialValues={{
                  userpassword: '',
                  usernewpassword: '',
                  userconfirmpassword: ''
                }}
                onSubmit={async (values) => {
                  setClick(true)
                  values.userid = user.UserId;

                  console.log('values', values);
                  
                  dispatch(changePasswordAction(values, userData.access_token));

                  if(!loadingChangePassword) {
                  console.log('updateUser', changeUser);

                    if (changeUser.hasOwnProperty('UserId')) {
                      
                      setTimeout(() => {
                      setClick(false)
  
                        props.navigation.navigate('Settings')
                      }, 4000);
  
                    } 
                    setClick(false)
                    console.log('val', values);
                  }
                }}>
                {({handleSubmit, isValid, values}) => (
                  <>
                    <Field
                      component={PTTextInputS}
                      name="userpassword"
                      secureTextEntry
                      label="Enter Old Password"
                    />
                    <Field
                      component={PTTextInputS}
                      name="usernewpassword"
                      secureTextEntry
                      label="Enter New Password"
                    />

                    <Field
                      component={PTTextInputS}
                      name="userconfirmpassword"
                      label="Confirm Password"
                      secureTextEntry
                    />
               
                    {/* opacity={isValid ? 0.2 : 1} */}
                    <View style={styles.wrapper}>
                      <Button
                        onPress={handleSubmit}
                        mode="contained"
                        style={{marginVertical: 10, width: '100%'}}
                        loading={click}
                        disabled={!isValid}
                        color="#394047">
                        Save Changes
                      </Button>
                    </View>
                  </>
                )}
              </Formik>
              {/* <PTTextInput
                labelWrapperStyle={{backgroundColor: '#fff'}}
                style={{marginVertical: 10}}
                label="Name"
              />
              <PTTextInput
                labelWrapperStyle={{backgroundColor: '#fff'}}
                style={{marginVertical: 10}}
                label="Email"
              />
              <PTTextInput
                labelWrapperStyle={{backgroundColor: '#fff'}}
                style={{marginVertical: 10}}
                label="Password"
              /> */}
            </Card.Content>
            <Card.Actions>
              {/* <Button
                onPress={() => {}}
                mode="contained"
                style={{marginVertical: 10, width: '100%'}}
                color="#394047">
                Save Changes
              </Button> */}
            </Card.Actions>
          </Card>
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
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

export default ChangePassword;
