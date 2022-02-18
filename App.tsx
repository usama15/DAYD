import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import theme from './lib/theme/Customizetheme';
import Routes from './lib/Components/Navigation/Route/Routes';
import {
  createNativeStackNavigator ,
} from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
