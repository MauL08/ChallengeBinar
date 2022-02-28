import {Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from '../screens/HomeScreen';
import CarListScreen from '../screens/CarListScreen';
import UserScreen from '../screens/UserScreen';

const MainScreen = () => {
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
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#0D28A6' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                  fontFamily: 'Helvetica',
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
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#0D28A6' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                  fontFamily: 'Helvetica',
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
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#0D28A6' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                  fontFamily: 'Helvetica',
                }}>
                Akun
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
