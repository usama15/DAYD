import {
  Box,
  Text,
  Center,
  VStack,
  ScrollView,
  Avatar,
  Image,
  Switch,
  Input,
  Icon,
  Button,
  Modal,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import styles from './Profile.style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import {removeStorage, getDataFromPhone} from '../../utils/localStore';
import RoutesKey from '../../Components/Navigation/Route/routesKey';
export default function profile() {
  const [data, setData] = useState('');
  useEffect(() => {
    getDataFromPhone('User').then(res => setData(JSON.parse(res)));
  }, []);
  const navigation = useNavigation();

  const logout = async () => {
    removeStorage('UserType'),
      removeStorage('Token'),
      removeStorage('User'),
      navigation.navigate(RoutesKey.WELCOME);
  };
  console.log(data);
  return (
    <ScrollView>
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          <VStack>
            <Box mb="10" alignSelf="center">
              <Avatar size="xl" source={{uri: data?.userImage}} />
            </Box>
            <Box>
              <Image
                w="100%"
                h="130"
                resizeMode="center"
                source={{
                  uri:
                    data?.userType == 'ambulance'
                      ? data?.LicenseNumber
                      : data?.userType == 'doctor'
                      ? data?.drCert
                      : null,
                }}
                alt="img"
              />
            </Box>
            <Box style={styles.box2}>
              <Input
                mb="5"
                isDisabled={true}
                defaultValue={data?.username}
                InputLeftElement={
                  <>
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
                  </>
                }
                InputRightElement={
                  <Icon
                    as={<Feather name="edit-3" />}
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
                placeholder="Login" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Input
                mb="5"
                isDisabled={true}
                defaultValue={data?.phoneNo}
                // value={phoneNo}
                InputLeftElement={
                  <>
                    <Icon
                      as={<Feather name="phone" />}
                      size="4"
                      m={4}
                      _light={{
                        color: 'black',
                      }}
                      _dark={{
                        color: 'gray.300',
                      }}
                    />
                  </>
                }
                InputRightElement={
                  <Icon
                    as={<Feather name="edit-3" />}
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
                placeholder="Login" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Input
                mb="5"
                defaultValue={data?.email}
                isDisabled={true}
                InputLeftElement={
                  <>
                    <Icon
                      as={<Ionicons name="mail-outline" />}
                      size="4"
                      m={4}
                      _light={{
                        color: 'black',
                      }}
                      _dark={{
                        color: 'gray.300',
                      }}
                    />
                  </>
                }
                InputRightElement={
                  <Icon
                    as={<Feather name="edit-3" />}
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
                placeholder="Login" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              {data?.userType == 'ambulance' ? (
                <Input
                  mb="5"
                  isDisabled={true}
                  defaultValue={data.Address}
                  InputLeftElement={
                    <>
                      <Icon
                        as={<Ionicons name="home" />}
                        size="4"
                        m={4}
                        _light={{
                          color: 'black',
                        }}
                        _dark={{
                          color: 'gray.300',
                        }}
                      />
                    </>
                  }
                  InputRightElement={
                    <Icon
                      as={<Feather name="edit-3" />}
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
                  placeholder="Login" // mx={4}
                  _light={{
                    placeholderTextColor: 'blueGray.400',
                  }}
                  _dark={{
                    placeholderTextColor: 'blueGray.50',
                  }}
                />
              ) : null}
              {data?.userType == 'ambulance' ? (
                <Input
                  mb="5"
                  isDisabled={true}
                  defaultValue={data.vehicleNumber}
                  InputLeftElement={
                    <>
                      <Icon
                        as={<Ionicons name="car" />}
                        size="4"
                        m={4}
                        _light={{
                          color: 'black',
                        }}
                        _dark={{
                          color: 'gray.300',
                        }}
                      />
                    </>
                  }
                  InputRightElement={
                    <Icon
                      as={<Feather name="edit-3" />}
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
                  placeholder="Login" // mx={4}
                  _light={{
                    placeholderTextColor: 'blueGray.400',
                  }}
                  _dark={{
                    placeholderTextColor: 'blueGray.50',
                  }}
                />
              ) : null}
              {data?.userType == 'doctor' ? (
                <Input
                  mb="5"
                  isDisabled={true}
                  defaultValue={data?.drType}
                  InputLeftElement={
                    <>
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
                    </>
                  }
                  InputRightElement={
                    <Icon
                      as={<Feather name="edit-3" />}
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
                  placeholder="Login" // mx={4}
                  _light={{
                    placeholderTextColor: 'blueGray.400',
                  }}
                  _dark={{
                    placeholderTextColor: 'blueGray.50',
                  }}
                />
              ) : null}
              {data?.userType == 'ambulance' || data?.userType == 'doctor' ? (
                <Input
                  mb="5"
                  isDisabled={true}
                  defaultValue={data.cnicNumber}
                  InputLeftElement={
                    <>
                      <Icon
                        as={<Ionicons name="card" />}
                        size="4"
                        m={4}
                        _light={{
                          color: 'black',
                        }}
                        _dark={{
                          color: 'gray.300',
                        }}
                      />
                    </>
                  }
                  InputRightElement={
                    <Icon
                      as={<Feather name="edit-3" />}
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
                  placeholder="Login" // mx={4}
                  _light={{
                    placeholderTextColor: 'blueGray.400',
                  }}
                  _dark={{
                    placeholderTextColor: 'blueGray.50',
                  }}
                />
              ) : null}
            </Box>
            <Button
              style={styles.btn}
              borderRadius="30"
              w="50%"
              onPress={() => logout()}>
              Signout
            </Button>
          </VStack>
        </Box>
      </Center>
    </ScrollView>
  );
}
