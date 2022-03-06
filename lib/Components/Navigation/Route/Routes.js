import React, { Component, useState } from 'react';
import {
    CardStyleInterpolators,
    createNativeStackNavigator ,
  } from '@react-navigation/native-stack';
import Welcome from '../../../Packages/Welcome/Welcome';
import Routeskey from './routesKey';
import SignIn from '../../../Packages/SignIn/SignIn'
import SignUp from '../../../Packages/SignUp/SignUp';
import BottomNav from '../BottomNav/BottomNav';
import DoctorRegistar from '../../../Packages/DoctorRegistar/DoctorRegistar';
import AmbulanceRegistor from '../../../Packages/AmbulanceRegistor/AmbulanceRegistor';
import RequestFromDoctor from '../../../Packages/AdminHome/RequestFromDoctor';

const Stack = createNativeStackNavigator();
class StackNav extends Component {
    render() {
        return (
            <Stack.Navigator
                initialRouteName={Routeskey.WELCOME}
                {...this.props}
                screenOptions={{
                    gestureEnabled: false,
                    gestureDirection: 'horizontal',
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerTitleAlign: 'center',
                }}>

                <Stack.Screen
                    name={Routeskey.WELCOME}
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.SIGNIN}
                    component={SignIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.SIGNUP}
                    component={SignUp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.BOTTOMNAV}
                    component={BottomNav}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.DOCTORREGISTAR}
                    component={DoctorRegistar}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.AMBULANCEREGISTAR}
                    component={AmbulanceRegistor}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.REQUESTFROMDOCTOR}
                    component={RequestFromDoctor}
                    options={{ headerShown: false }}
                />
                
            </Stack.Navigator>
        )
    }
}


export default Routes = () => {
    return (
        <>
            <StackNav />
        </>
    );
}