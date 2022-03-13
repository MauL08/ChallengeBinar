import {View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import FavoriteScreen from '../../screens/FavoriteScreen';
import AccountScreen from '../../screens/AccountScreen';

import {Home, Favorite, User} from '../../assets';

import Color from '../../config/utils/color';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Color.CONTAINER_COLOR,
          height: 70,
          right: 35,
          left: 35,
          bottom: 25,
          borderRadius: 10,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={Home}
                style={{
                  tintColor: focused
                    ? Color.ACTIVE_BUTTON_COLOR
                    : Color.DISABLE_BUTTON_COLOR,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={Favorite}
                style={{
                  tintColor: focused
                    ? Color.ACTIVE_BUTTON_COLOR
                    : Color.DISABLE_BUTTON_COLOR,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={User}
                style={{
                  tintColor: focused
                    ? Color.ACTIVE_BUTTON_COLOR
                    : Color.DISABLE_BUTTON_COLOR,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
