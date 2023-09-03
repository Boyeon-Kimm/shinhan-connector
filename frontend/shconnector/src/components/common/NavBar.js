import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MainPage from '../../pages/Main/MainPage';
import CalenderPage from '../../pages/Calendar/CalendarPage';
import FriendPage from '../../pages/Friend/FriendPage';
import GiftManagePage from '../../pages/GiftManage/GiftManagePage';
import ListMenuPage from '../../pages/ListMenu/ListMenuPage';

import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Main')
            return (
              <MaterialCommunityIcons
                name="home"
                size={size}
                color={color}
              />
            );
          else if (route.name === 'Calendar')
            return (
              <Entypo
                name="calendar"
                size={size}
                color={color}
              />
            );
          else if (route.name === 'Friend')
            return (
              <Ionicons
                name="md-person-circle"
                size={size}
                color={color}
              />
            );
          else if (route.name === 'GiftManage')
            return (
              <MaterialCommunityIcons
                name="gift"
                size={size}
                color={color}
              />
            );
          else if (route.name === 'ListMenu')
            return (
              <AntDesign
                name="appstore1"
                size={size}
                color={color}
              />
            );
        },
        tabBarLabel: '',
        tabBarActiveTintColor: '#0D4DA3',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Main"
        component={MainPage}
      />
      <Tab.Screen
        name="Calendar"
        component={CalenderPage}
      />
      <Tab.Screen
        name="Friend"
        component={FriendPage}
      />
      <Tab.Screen
        name="GiftManage"
        component={GiftManagePage}
      />
      <Tab.Screen
        name="ListMenu"
        component={ListMenuPage}
      />
    </Tab.Navigator>
  );
}
