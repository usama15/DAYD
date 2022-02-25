import {
  Box,
  Center,
  Image,
  Input,
  Icon,
  ScrollView,
  Link,
  VStack,
  Button,
  Text,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './SignIn.style';
import {useNavigation} from '@react-navigation/native';

// import { SignInUser } from '../duck/operations';
import {Alert, ActivityIndicator} from 'react-native';
import RoutesKey from '../../Components/Navigation/Route/routesKey';
import {SignInUser} from './duck/operations';

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [uData, setUdata] = useState([]);

  // const Email = uData.filter(x => x.email == email).map((data) => data.email)

  const Login = () => {
    let data = {
      email: email,
      password: password,
    };
    SignInUser(data).then(async res  => {
      if(res.success == true) {
        await navigation.navigate(RoutesKey.BOTTOMNAV);
      }
      setUdata(res);
    });
  };

  console.log(uData);
  return (
    <ScrollView bg="#f6f6f1">
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          <Box style={styles.imgBox}>
            <Text fontSize="34">Welcome to the DAYD</Text>
            <Text mt="5" fontSize="20">
              Sign In
            </Text>
            {/* <Image source={require('../../../assets/LogoNoBackground2.png')} alt="Logo" /> */}
          </Box>
          <Input
            mt="20%"
            onChangeText={val => setEmail(val)}
            InputLeftElement={
              <Icon // TODO: I think you can directly use FontAwesome icon, why we wrap into Icon
                as={<FontAwesome5 name="user" />}
                size="4"
                m={4}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300', // TODO: color should be squence with primary | secondary | dark | light | primary_dark | primary_light and so on....
                }}
              />
            }
            placeholder="Username" // mx={4}
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
          <Input
            onChangeText={val => setPassword(val)}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="lock" outli={false} outline />}
                size="4"
                m={4}
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            InputRightElement={
              <Icon
                as={<FontAwesome5 name="eye-slash" />}
                size="4"
                m={4}
                mr="5"
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'gray.300',
                }}
              />
            }
            type="password"
            placeholder="Password" // mx={4}
            mt="16px"
            _light={{
              placeholderTextColor: 'blueGray.400',
            }}
            _dark={{
              placeholderTextColor: 'blueGray.50',
            }}
          />
          <Box width="100%" mt="10">
            <VStack space={3}>
              <Button h="48px" onPress={() => Login()}>
                Login
              </Button>
            </VStack>
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
}
