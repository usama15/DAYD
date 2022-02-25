import React, {useState, useEffect} from 'react';
// 1. import `NativeBaseProvider` component
import {
  Box,
  Heading,
  VStack,
  Button,
  Center,
  Image,
  Input,
  Icon,
  Link,
  Text,
  HStack,
  ScrollView,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
// import { saveDataInPhone } from "./localStorage";
import {TouchableOpacity} from 'react-native';
import { SignUpUser } from './duck/operations';
import RoutesKey from '../../Components/Navigation/Route/routesKey';
// import Axios from "axios"

export default function SignUp(props) {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pincode, setPincode] = useState('');
  const [conformPincode, setConformPincode] = useState('');

  const Login = () => {
    let data = {
      username: userName,
      email: email,
      phoneNo: phoneNo,
      password: pincode,
      userType: 'user',
    };
    if(pincode == conformPincode){
      SignUpUser(data).then(() => navigation.navigate(RoutesKey.SIGNIN))
    }else{
      alert('Password Wrong')
    }
  };

  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="10px">
          <Box mt="1/3" height="100%">
            <Center>
              {/* <Image source={QuenoTextIcon} alt="Alternate Text" /> */}
              <Text
                fontSize="24"
                fontFamily="Merriweather"
                textAlign="center"
                mt="30px">
                Welcome to Smart Farm’s Loop!
              </Text>
              <Heading mt="30px" mb="20px" size="sm">
                Sign up
              </Heading>

              <Input
                onChangeText={val => setUserName(val)}
                borderRadius="30"
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="user" />}
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
                placeholder="Username" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Input
                onChangeText={val => setEmail(val)}
                borderRadius="30"
                mt="16px"
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="user" />}
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
                placeholder="Email" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Input
                onChangeText={val => setPhoneNo(val)}
                borderRadius="30"
                mt="16px"
                keyboardType="numeric"
                InputLeftElement={
                  <Icon
                    as={<FontAwesome5 name="user" />}
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
                placeholder="Phone No" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />

              <Input
                onChangeText={val => setPincode(val)}
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
                  <TouchableOpacity onPress={() => setShow(!show)}>
                    <Icon
                      as={<FontAwesome5 name={show ? 'eye-slash' : 'eye'} />}
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
                  </TouchableOpacity>
                }
                type={show ? 'text' : 'password'}
                placeholder="Password" // mx={4}
                mt="16px"
                borderRadius="30"
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Input
                onChangeText={val => setConformPincode(val)}
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
                  <TouchableOpacity onPress={() => setShow1(!show1)}>
                    <Icon
                      as={<FontAwesome5 name={show1 ? 'eye-slash' : 'eye'} />}
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
                  </TouchableOpacity>
                }
                type={show1 ? 'text' : 'password'}
                placeholder="Conform Password" // mx={4}
                mt="16px"
                borderRadius="30"
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Box width="100%" mt="10">
                <VStack space={3}>
                  <Button
                    borderRadius="30"
                    h="48px"
                    onPress={
                      () => Login()
                      // authOperations.login(data, dispatch).then((res) => {
                      //   if(res.role == 'student'){
                      //   }
                      // }
                      // )
                    }>
                    Sign Up!
                  </Button>
                  <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600">
                      All ready have Account{' '}
                    </Text>
                    <Link onPress={() => navigation.pop()}>Sign in</Link>
                  </HStack>
                </VStack>
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
}
