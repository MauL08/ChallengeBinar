import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from '../../screens/HomeScreen';
import FavoriteScreen from '../../screens/FavoriteScreen';
import AccountScreen from '../../screens/AccountScreen';

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'grey',
          height: 60,
          margin: 20,
          elevation: 2,
          borderRadius: 20,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Image
                source={require('../assets/images/bottomNav/home.png')}
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              /> */}
              <Text
                style={{
                  fontSize: 14,
                  color: focused ? 'orange' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Image
                source={require('../assets/images/bottomNav/home.png')}
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              /> */}
              <Text
                style={{
                  fontSize: 14,
                  color: focused ? 'orange' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                }}>
                Favorite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {/* <Image
                source={require('../assets/images/bottomNav/home.png')}
                style={{
                  tintColor: focused ? '#0D28A6' : '#000000',
                }}
              /> */}
              <Text
                style={{
                  fontSize: 14,
                  color: focused ? 'orange' : '#000000',
                  fontWeight: focused ? 'bold' : '300',
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
