import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import CarListScreen from '../screens/CarListScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Daftar Mobil"
        component={CarListScreen}
        options={{
          headerTransparent: true,
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
        }}
      />
      <Tab.Screen
        name="Akun"
        component={UserScreen}
        options={{
          headerTransparent: true,
          headerTitleStyle: {fontSize: 18, fontWeight: 'bold'},
        }}
      />
    </Tab.Navigator>
  );
}

function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Router;
