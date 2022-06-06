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
  Avatar,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {SignUpUser} from './duck/operations';
import RoutesKey from '../../Components/Navigation/Route/routesKey';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export default function SignUp(props) {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pincode, setPincode] = useState('');
  const [conformPincode, setConformPincode] = useState('');
  const [Img, setImg] = useState('');
  const [newimage, setnewimage] = useState('');

  const Login = () => {
    getImageURL().then(res => {
      let data = {
        username: userName,
        email: email,
        phoneNo: phoneNo,
        password: pincode,
        userType: 'user',
        userImage: res,
      };
      if (pincode == conformPincode) {
        SignUpUser(data).then(() => navigation.navigate(RoutesKey.SIGNIN));
      } else {
        alert('Password Wrong');
      }
    });
  };
  const uploadImgTwo = () => {
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

  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="10px">
          <Box mt="20" height="100%">
            <Center>
              {/* <Image source={QuenoTextIcon} alt="Alternate Text" /> */}
              <Text fontSize="24" fontFamily="Merriweather" textAlign="center">
                Welcome to DAYD
              </Text>
              <Heading mt="10px" mb="20px" size="sm">
                Sign up for User
              </Heading>
              <Box mb="10">
                <Avatar size="xl" source={{uri: Img}} />
                <TouchableOpacity onPress={() => uploadImgTwo()}>
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
                  <Button borderRadius="30" h="48px" onPress={() => Login()}>
                    Sign Up!
                  </Button>
                  <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600">
                      All ready have Account{' '}
                    </Text>
                    <Link onPress={() => navigation.pop()}>Sign in</Link>
                  </HStack>
                  <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600">
                      For Doctor{' '}
                    </Text>
                    <Link
                      onPress={() =>
                        navigation.navigate(RoutesKey.DOCTORREGISTAR)
                      }>
                      Registration
                    </Link>
                  </HStack>
                  <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600">
                      For Ambulance{' '}
                    </Text>
                    <Link
                      onPress={() =>
                        navigation.navigate(RoutesKey.AMBULANCEREGISTAR)
                      }>
                      Registration
                    </Link>
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
