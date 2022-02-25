import {Box, Button, Center, Image, Text} from 'native-base';
import React, {useState, useEffect} from 'react';
import styles from './Welcome.styles';
import {useNavigation} from '@react-navigation/native';
import Routeskey from '../../Components/Navigation/Route/routesKey';
import {getDataFromPhone} from '../../utils/localStore';
// import { getDataFromPhone } from '../../utils/localStore'

export default function Welcome() {
  const navigation = useNavigation();
  useEffect(() => {
    chkUser();
  }, []);

  const chkUser = async () => {
    let data = await getDataFromPhone('Token')

    if(data !== ''){
        navigation.navigate(Routeskey.BOTTOMNAV)
    }else if(data == '' ){
        navigation.navigate(Routeskey.SIGNIN)
    }
    console.log("data",data)
  };
  return (
    <Center mt="5" px="3">
      <Box w="100%" p="10px">
        <Box style={styles.imgBox}>
          <Text fontSize="64">DAYD</Text>
          {/* <Image source={require('../../assets/LogoNoBackground2.png')} alt="lgo" /> */}
        </Box>
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate(Routeskey.SIGNIN)}>
          login
        </Button>
        <Button
          style={styles.btn}
          onPress={() => navigation.navigate(Routeskey.SIGNUP)}>
          Sign Up
        </Button>
      </Box>
    </Center>
  );
}
