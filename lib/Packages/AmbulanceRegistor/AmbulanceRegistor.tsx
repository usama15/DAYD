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
import {postAmbulanceData} from './duck/operations';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const AmbulanceRegistor = () => {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [cnicNumber, setCnicNumber] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [Address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [conformPincode, setConformPincode] = useState('');
  const [Img, setImg] = useState('');
  const [newimage, setnewimage] = useState('');
  const [Img2, setImg2] = useState('');
  const [newimage2, setnewimage2] = useState('');

  const uploadImgOne = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImg(imageUri);
      let imgName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const reference = storage().ref(imgName);
      setnewimage(imgName);
      try {
        reference.putFile(imageUri).then(() => {
          alert('Image Stored');
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  async function getImageURL() {
    return await storage()
      .ref(newimage)
      .getDownloadURL()
      .then(uri => {
        return uri;
      })
      .catch(e => console.log(e));
  }

  const uploadImgTwo = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImg2(imageUri);
      let imgName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const reference = storage().ref(imgName);
      setnewimage2(imgName);
      try {
        reference.putFile(imageUri).then(() => {
          alert('Image Stored');
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  async function getImageURL2() {
    return await storage()
      .ref(newimage2)
      .getDownloadURL()
      .then(uri => {
        return uri;
      })
      .catch(e => console.log(e));
  }

  const Login = () => {
    getImageURL().then(res => {
      getImageURL2().then(res1 => {
        let data = {
          username: userName,
          email: email,
          phoneNo: phoneNo,
          password: pincode,
          userType: 'ambulance',
          cnicNumber: cnicNumber,
          vehicleNumber: vehicleNumber,
          LicenseNumber: res1,
          Address: Address,
          userImage: res,
        };
        console.log(data);
        if (pincode == conformPincode) {
          postAmbulanceData(data).then(() => navigation.pop());
        } else {
          alert('Password Wrong');
        }
      });
    });
  };

  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="10px">
          <Box height="100%">
            <Center>
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
              <Box mb="10">
                <Avatar size="xl" source={{uri: Img}} />
                <TouchableOpacity onPress={() => uploadImgOne()}>
                  <Icon
                    ml="auto"
                    mt="-2"
                    size="4"
                    as={<FontAwesome5 name="edit" />}
                  />
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
                maxLength={11}
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
                maxLength={13}
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
