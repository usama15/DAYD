import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import theme from './lib/theme/Customizetheme';
import Routes from './lib/Components/Navigation/Route/Routes';
import {
  createNativeStackNavigator ,
} from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { LogBox } from 'react-native';

export default function App() {
  useEffect(() => {
    LogBox.ignoreAllLogs(); //Ignore all log notifications
  }, []);
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
