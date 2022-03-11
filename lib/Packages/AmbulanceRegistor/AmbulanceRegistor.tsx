import {TouchableOpacity} from 'react-native';
import RoutesKey from '../../Components/Navigation/Route/routesKey';
import React, {useState, useEffect} from 'react';
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
  Avatar,
  ScrollView,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import {postAmbulanceData} from './duck/operations';
const AmbulanceRegistor = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [cnicNumber, setCnicNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [conformPincode, setConformPincode] = useState('');
  const [Img, setImg] = useState('');
  const uploadImgOne = () => {
    const options = {
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        const type = response.assets[0].type;
        const name = response.assets[0].fileName;
        const source = {
          uri,
          type,
          name,
        };
        cloudinaryUploadOne(source);
      }
    });
  };

  const cloudinaryUploadOne = image => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'hl08r4ih');
    data.append('cloud_name', 'da6xurnwg');
    fetch('https://api.cloudinary.com/v1_1/da6xurnwg/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setImg(data.url);
      })
      .then(async () => await alert('Submit'))
      .catch(err => {
        alert(err);
      });
  };
  const uploadImgTwo = () => {
    const options = {
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        const type = response.assets[0].type;
        const name = response.assets[0].fileName;
        const source = {
          uri,
          type,
          name,
        };
        cloudinaryUploadTwo(source);
      }
    });
  };

  const cloudinaryUploadTwo = image => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'hl08r4ih');
    data.append('cloud_name', 'da6xurnwg');
    fetch('https://api.cloudinary.com/v1_1/da6xurnwg/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setLicenseNumber(data.url);
      })
      .then(async () => await alert('Submit'))
      .catch(err => {
        alert(err);
      });
  };

  const Login = () => {
    let data = {
      username: userName,
      email: email,
      phoneNo: phoneNo,
      password: pincode,
      userType: 'ambulance',
      cnicNumber: cnicNumber,
      vehicleNumber: vehicleNumber,
      LicenseNumber: licenseNumber,
      Address: Address,
      userImage: Img,
    };
    console.log(data);
    if (pincode == conformPincode) {
      postAmbulanceData(data).then(() => navigation.pop());
    } else {
      alert('Password Wrong');
    }
  };

  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="10px">
          <Box  height="100%">
            <Center>
              {/* <Image source={QuenoTextIcon} alt="Alternate Text" /> */}
              <Text
                fontSize="24"
                fontFamily="Merriweather"
                textAlign="center"
                mt="10px">
                Welcome to DAYD
              </Text>
              <Heading mt="20px" mb="20px" size="sm">
                Registration form for Ambulance
              </Heading>
              <Box mb='10'>
                <Avatar size="xl" source={{uri : Img}}/>
                <TouchableOpacity onPress={() => uploadImgOne()}>
                <Icon ml='auto' mt='-2' size='4' as={<FontAwesome5 name="edit" />}/>
                </TouchableOpacity>
              </Box>
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
                onChangeText={val => setCnicNumber(val)}
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
                placeholder="Cnic number" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              {/* <Input
                onChangeText={val => setLicenseNumber(val)}
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
                placeholder="License number" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              /> */}
              <Input
                onChangeText={val => setVehicleNumber(val)}
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
                placeholder="Vehicle number" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Input
                onChangeText={val => setAddress(val)}
                mt="16px"
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
                placeholder="Address" // mx={4}
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
                    onPress={() => uploadImgTwo()}>
                    Pick License
                  </Button>
                  <Button borderRadius="30" h="48px" onPress={() => Login()}>
                    Sign Up!
                  </Button>
                </VStack>
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default AmbulanceRegistor;
