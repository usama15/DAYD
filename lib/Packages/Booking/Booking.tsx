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
  HStack,
  ScrollView,
  CheckIcon,
  Select,
  Modal,
  FlatList,
  Radio,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {getDataFromPhone} from '../../utils/localStore';
import {createOrderData} from './duck/operations';
export default function Booking(props: any) {
  const {info} = props?.route?.params;
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [quality, setQuality] = React.useState('');

  const [udata, setUData] = useState<any>('');
  const [udata1, setUdata1] = useState([]);

  useEffect(() => {
    getDataFromPhone('User').then(res => setUData(JSON.parse(res)));
  }, []);
  console.log(udata);
  const Submit = async () => {
    let data: any = {
      patientName: name,
      phoneNo: udata.phoneNo,
      email: udata.email,
      vendorEmail: info.email,
      Address: quality,
    };
    createOrderData(data).then((res: any) => {
      if (res.success == true) {
        navigation.pop();
      }
    });
  };
  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="10px">
          <Box mt="10" height="100%">
            <Center>
              <Heading mt="30px" mb="10">
                Booking Form!
              </Heading>
              <Input
                onChangeText={val => setName(val)}
                borderRadius="30"
                value={name}
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
                placeholder="Patient Name" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Input
                onChangeText={val => setQuality(val)}
                value={quality}
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
                placeholder="Address" // mx={4}
                _light={{
                  placeholderTextColor: 'blueGray.400',
                }}
                _dark={{
                  placeholderTextColor: 'blueGray.50',
                }}
              />
              <Box width="50%" mt="5">
                <VStack space={3}>
                  <Button borderRadius="30" h="48px" onPress={() => Submit()}>
                    Add Booking!
                  </Button>
                </VStack>
              </Box>
            </Center>
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
}