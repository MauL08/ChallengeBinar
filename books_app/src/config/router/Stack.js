import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NetInfo from '@react-native-community/netinfo';

import {
  LoginScreen,
  RegisterScreen,
  SuccessScreen,
  DetailScreen,
  ProfileScreen,
} from '../../screens';
import MainScreen from './BottomNav';
import NoInternet from '../../components/NoInternet';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [netStatus, setNetStatus] = useState(true);

  const connection = NetInfo.fetch().then(state => {
    return state.isConnected;
  });

  useEffect(() => {
    connection.then(res => {
      setNetStatus(res);
    });
  }, [connection]);

  return (
    <Stack.Navigator initialRouteName={netStatus ? 'Login' : 'NoInternet'}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Success"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NoInternet"
        component={NoInternet}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
