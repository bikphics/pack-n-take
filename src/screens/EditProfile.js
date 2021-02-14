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
import {updateUserAction, getUserAction} from '../redux/actions/authAction';
import {useAppContext} from '../config/AppContext';

const signInValidationSchema = yup.object().shape({
  useremail: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  username: yup.string().required('Name is required'),
  usernumber: yup.string().matches(new RegExp('[0-9]{7}')),
});

const EditProfile = (props) => {
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user} = useAppContext();

  const dispatch = useDispatch();
  // Select getLoggedInUser state

  const resultData = useSelector((state) => state.updateUser);
  const {loading, error, updateUser} = resultData;

  const resultUser = useSelector((state) => state.getUser);
  const {loadingUser, errorUser} = resultUser;

  const store = useStore();
  const userData = store.getState().loginUser;

  useEffect(() => {
    dispatch(getUserAction(user.access_token));

    if (!loadingUser) {
      console.log('user-----profile', user);
    }
  }, [user]);

  return (
    <>
      <Header
        title="Edit Profile"
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
          {loadingUser ? (
            <Text>Loading</Text>
          ) : (
            <Card>
              <Card.Title title="Edit Profile" />
              <Card.Content>
                <Formik
                  validationSchema={signInValidationSchema}
                  initialValues={{
                    useremail: user.UserEmail,
                    username: user.UserName,
                    usernumber: user.UserMobile && user.UserMobile,
                  }}
                  onSubmit={async (values) => {
                    setClick(true);
                    values.userid = user.UserId;

                    console.log('values', values);

                    dispatch(updateUserAction(values, userData.access_token));

                    console.log('updateUser', updateUser);
                    if (updateUser) {
                      setTimeout(() => {
                        setClick(false);

                        props.navigation.navigate('Settings');
                      }, 4000);
                    }
                    setClick(false);
                    console.log('val', values);
                  }}>
                  {({handleSubmit, isValid, values}) => (
                    <>
                      <Field
                        component={PTTextInputS}
                        name="username"
                        label="Username"
                      />
                      <Field
                        component={PTTextInputS}
                        name="useremail"
                        keyboardType="email-address"
                        label="Email"
                      />
                      <Field
                        component={PTTextInputS}
                        name="usernumber"
                        label="UserMobile"
                        keyboardType="number-pad"
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
          )}
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

export default EditProfile;
