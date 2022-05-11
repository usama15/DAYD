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
import RequestFromAmbulance from '../../../Packages/AdminHome/RequestFromAmbulance';
import DoctorInfo from '../../../Packages/AdminHome/DoctorInfo';
import AmbulanceInfo from '../../../Packages/AdminHome/AmbulanceInfo';
import UserInfo from '../../../Packages/AdminHome/UserInfo';
import DoctorRequest from '../../../Packages/DoctorHome/DoctorRequest';
import DoctorConformRequest from '../../../Packages/DoctorHome/DoctorConformRequest';
import AmbulanceRequest from '../../../Packages/AmbulanceHome/AmbulanceRequest';
import AmbulanceConformRequest from '../../../Packages/AmbulanceHome/AmbulanceConformRequest';
import DetailInfo from '../../../Packages/DetailInfo/DetailInfo';
import Booking from '../../../Packages/Booking/Booking';
import Silder from '../../Silder';
import AddImage from '../../../Packages/AdminHome/AddImage';
import Chat from '../../../Packages/Chat/Chat';
import VentorChatMain from '../../../Packages/Chat/VentorChatMain';

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
                <Stack.Screen
                    name={Routeskey.REQUESTFROMAMBULANCE}
                    component={RequestFromAmbulance}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.DOCTORINFO}
                    component={DoctorInfo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.AMBULANCEINFO}
                    component={AmbulanceInfo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.USERINFO}
                    component={UserInfo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.DOCTORREQUEST}
                    component={DoctorRequest}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.DOCTORREQUESTCONFORM}
                    component={DoctorConformRequest}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.AMBULANCEREQUEST}
                    component={AmbulanceRequest}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.AMBULANCEREQUESTCONFORM}
                    component={AmbulanceConformRequest}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.DETAILINFO}
                    component={DetailInfo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.BOOKING}
                    component={Booking}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.SILDERIMAGES}
                    component={AddImage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.CHAT}
                    component={Chat}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routeskey.VENTORCHAT}
                    component={VentorChatMain}
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