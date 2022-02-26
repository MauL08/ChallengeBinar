import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SplashScreen from '../pages/SplashScreen';
import HomeScreen from '../pages/HomeScreen';
import CarListScreen from '../pages/CarListScreen';
import UserScreen from '../pages/UserScreen';

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
        name="CarList"
        component={CarListScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{headerShown: false}}
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
