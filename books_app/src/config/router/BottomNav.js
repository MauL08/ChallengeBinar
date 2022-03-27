import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { bottomBarIconStyle, tabBarStyle } from '../utils/styles';
import { HomeIcon, BookIcon, BookmarkIcon, SettingIcon } from '../../assets/';
import {
  HomeScreen,
  BooksScreen,
  BookmarkScreen,
  SettingScreen,
} from '../../screens/bottomNav';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: tabBarStyle,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={HomeIcon}
                style={bottomBarIconStyle.icon(focused)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={BookIcon}
                style={bottomBarIconStyle.icon(focused)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={BookmarkIcon}
                style={bottomBarIconStyle.icon(focused)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={SettingIcon}
                style={bottomBarIconStyle.icon(focused)}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
