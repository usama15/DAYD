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
import Dashboard from '../../../Packages/DashBoard/Dashboard';
import {getDataFromPhone} from '../../../utils/localStore';
import AdminBottomNav from './AdminBottomNav';
import DoctorBottomNav from './DoctorBottomNav';
import AmbBottomNav from './AmbBottomNav';
import { Icon, IconButton } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RoutesKey from '../Route/routesKey';
const userNav = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation()

  return (
    <Tab.Navigator
    initialRouteName="Dashboard"
    screenOptions={{
      headerTitleAlign: 'center',
      tabBarActiveTintColor: '#25A9B6',
      }}>
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="shopping" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          headerRight: () => (
            <IconButton
              icon={<Icon as={MaterialIcons} name="history-edu" />}
              onPress={() =>
                navigation.navigate(RoutesKey.PATIENTHISTORY)
              }
            />
          ),
          headerShown: true,
          tabBarIcon: ({color, size}) => (
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
};

let udata = '';
const BottomNav = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    getDataFromPhone('UserType').then(res => setData(res));
  }, []);
  console.log('nav', data);
  // const userData = useSelector((state) => state.user.initialState);
  return data == 'admin'
    ? AdminBottomNav()
    : data == 'doctor'
    ? DoctorBottomNav()
    : data == 'ambulance'
    ? AmbBottomNav()
    : userNav();
};
export default BottomNav;
