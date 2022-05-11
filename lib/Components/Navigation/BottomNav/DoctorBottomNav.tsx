import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import History from '../../../Packages/History/History';
import Profile from '../../../Packages/Profile/Profile';
// import { useSelector } from "react-redux";
// import AdminBottomNav from '../Navigation/AdminBottomNav'
// import { getDataFromPhone } from "../packages/localStorage";
// import FarmBottomNav from "./FarmBottomNav";
// import TransportBottomNav from "./TransportBottomNav";
// import CatringBottomNav from "./CatringBottomNav";
import {useNavigation} from '@react-navigation/native';
import DoctorHome from '../../../Packages/DoctorHome/DoctorHome';
import VentorChat from '../../../Packages/Chat/VentorChat';

export default function DoctorBottomNav() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#25A9B6',
            }}
        >
            <Tab.Screen
                name="Home"
                component={DoctorHome}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
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
                    tabBarIcon: ({ color, size }) => (
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
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-box-outline" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}