import * as React from 'react';
import {Text, View, Image} from 'react-native';
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
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/images/bottomNav/home.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#0D28A6' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Daftar Mobil"
        component={CarListScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/bottomNav/list.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#0D28A6' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                }}>
                Daftar Mobil
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={require('../assets/images/bottomNav/user.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#0D28A6' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                }}>
                Akun
              </Text>
            </View>
          ),
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
