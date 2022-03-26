// import { View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/bottomNav/HomeScreen';
import BooksScreen from '../../screens/bottomNav/BooksScreen';
import BookmarkScreen from '../../screens/bottomNav/BookmarkScreen';
import SettingScreen from '../../screens/bottomNav/SettingScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        headerShown: false,
        // tabBarStyle: {
        //   backgroundColor: Color.BACKGROUND_COLOR,
        //   elevation: 0,
        // },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View>
        //       <Image
        //         source={Home}
        //         style={{
        //           tintColor: focused
        //             ? Color.ACTIVE_BUTTON_COLOR
        //             : Color.DISABLE_BUTTON_COLOR,
        //         }}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View>
        //       <Image
        //         source={Home}
        //         style={{
        //           tintColor: focused
        //             ? Color.ACTIVE_BUTTON_COLOR
        //             : Color.DISABLE_BUTTON_COLOR,
        //         }}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View>
        //       <Image
        //         source={Home}
        //         style={{
        //           tintColor: focused
        //             ? Color.ACTIVE_BUTTON_COLOR
        //             : Color.DISABLE_BUTTON_COLOR,
        //         }}
        //       />
        //     </View>
        //   ),
        // }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        // options={{
        //   tabBarIcon: ({ focused }) => (
        //     <View>
        //       <Image
        //         source={Home}
        //         style={{
        //           tintColor: focused
        //             ? Color.ACTIVE_BUTTON_COLOR
        //             : Color.DISABLE_BUTTON_COLOR,
        //         }}
        //       />
        //     </View>
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
