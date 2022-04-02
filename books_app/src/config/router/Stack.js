import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  LoginScreen,
  RegisterScreen,
  SuccessScreen,
  DetailScreen,
  ProfileScreen,
} from '../../screens';
import MainScreen from './BottomNav';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Detail">
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
    </Stack.Navigator>
  );
};

export default Router;
