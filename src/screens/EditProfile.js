import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Card} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native';
import {PT_COLORS} from '../config';
import {Header, PTTextInput} from '../components';

const EditProfile = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView style={{padding: 14}}>
          <Card>
            <Card.Title
              title="Edit Profile"
              left={(props) => (
                <Ionicons
                  name="person-add-outline"
                  color={PT_COLORS.secondaryDark}
                  {...props}
                />
              )}
            />
            <Card.Content>
              <PTTextInput
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
              />
            </Card.Content>
            <Card.Actions>
              <Button
                onPress={() => {}}
                mode="contained"
                style={{marginVertical: 10, width: '100%'}}
                color={PT_COLORS.secondaryDark}>
                Save Changes
              </Button>
            </Card.Actions>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EditProfile;
