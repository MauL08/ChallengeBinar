import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import CarListScreen from '../screens/CarListScreen';
import UserScreen from '../screens/UserScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconColor;

          if (Router.name === 'Home') {
            iconName = 'ios-information-circle';
            iconColor = focused ? '#0D28A6' : '#000000';
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        tabBarActiveTintColor: '#0D28A6',
        tabBarInactiveTintColor: '#000000',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Daftar Mobil"
        component={CarListScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Akun"
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
