import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../../../Packages/Profile/Profile';
import {useNavigation} from '@react-navigation/native';
import AmbulanceHome from '../../../Packages/AmbulanceHome/AmbulanceHome';
import VentorChat from '../../../Packages/Chat/VentorChat';

export default function AmbBottomNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#25A9B6',
      }}>
      <Tab.Screen
        name="Home"
        component={AmbulanceHome}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={VentorChat}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-box-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
