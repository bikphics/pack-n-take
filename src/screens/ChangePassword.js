import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Card} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {PT_COLORS} from '../config';
import {Header, PTTextInput} from '../components';
import {SafeAreaView} from 'react-native';

const ChangePassword = (props) => {
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
          <Card>
            <Card.Title title="Change Password" />
            <Card.Content>
              <PTTextInput
                labelWrapperStyle={{backgroundColor: '#fff'}}
                style={{marginVertical: 10}}
                label="Current Password"
              />
              <PTTextInput
                labelWrapperStyle={{backgroundColor: '#fff'}}
                style={{marginVertical: 10}}
                label="New Password"
              />
              <PTTextInput
                labelWrapperStyle={{backgroundColor: '#fff'}}
                style={{marginVertical: 10}}
                label="Verify Password"
              />
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() => {}}
                mode="contained"
                style={{marginVertical: 10, width: '100%'}}
                color="#394047">
                Save Changes
              </Button>
            </Card.Actions>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ChangePassword;
