import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import History from '../../../Packages/History/History';
import Profile from '../../../Packages/Profile/Profile';
import {useNavigation} from '@react-navigation/native';
import {getDataFromPhone} from '../../../utils/localStore';
import AdminHome from '../../../Packages/AdminHome/AdminHome';
import AddVentor from '../../../Packages/AddVentor/AddVentor';

export default function AdminBottomNav() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#ec4899',
            }}
        >
            <Tab.Screen
                name="AddVentor"
                component={AddVentor}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="shopping" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Home"
                component={AdminHome}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-box-outline" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}