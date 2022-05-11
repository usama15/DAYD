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
  Divider,
} from 'native-base';
import GridImageView from 'react-native-grid-image-viewer';
import {useNavigation} from '@react-navigation/native';
import RoutesKey from '../../Components/Navigation/Route/routesKey';

export default function DetailInfo(props: any) {
  const navigation = useNavigation();

  const {data} = props?.route?.params;
  console.log(data);
  return (
    <ScrollView>
      <Center mt="5" px="3">
        {data !== '' ? (
          <Box w="100%" p="10px">
            <Box borderRadius={20}>
              <Image
                alignSelf="center"
                borderRadius={20}
                w="150"
                h="200"
                source={{uri: data.userImage}}
                alt="img"
              />
            </Box>
            <Box mt="3">
              <GridImageView data={[data?.LicenseNumber, data?.drCert]} />
            </Box>
            <Box bg="#25A9B6" borderRadius="10">
              <Text
                fontSize="24"
                alignSelf="center"
                fontFamily="Merriweather"
                color="white">
                {data.userType} Detail
              </Text>
            </Box>

            <Box mt="3">
              <Text fontSize="18" fontWeight="bold">
                Name :<Text fontWeight="400">{data?.username}</Text>
              </Text>
              <Text fontSize="18" fontWeight="bold">
                Email :<Text fontWeight="400">{data?.email}</Text>
              </Text>
              <Text fontSize="18" fontWeight="bold">
                Phone No :<Text fontWeight="400">{data?.phoneNo}</Text>
              </Text>
              {data.userType == 'doctor' ? (
                <Text fontSize="18" fontWeight="bold">
                  Category :<Text fontWeight="400">{data?.drType}</Text>
                </Text>
              ) : (
                <Text fontSize="18" fontWeight="bold">
                  Vehicle Number :
                  <Text fontWeight="400">{data.vehicleNumber}</Text>
                </Text>
              )}
              <Text fontSize="18" fontWeight="bold">
                Cnic Number :<Text fontWeight="400">{data.cnicNumber}</Text>
              </Text>
              {data.userType == 'ambulance' ? (
                <Text fontSize="18" fontWeight="bold">
                  Address :<Text fontWeight="400">{data.Address}</Text>
                </Text>
              ) : null}
            </Box>
            <Box flexDirection="row">
              <Button
                onPress={() =>
                  navigation.navigate(RoutesKey.CHAT, {chat: data})
                }
                mt="5"
                mr="1"
                alignSelf="center"
                w="50%">
                Chat
              </Button>
              <Button
                mt="5"
                rounded={20}
                w="50%"
                alignSelf="center"
                onPress={() =>
                  navigation.navigate(RoutesKey.BOOKING, {info: data})
                }>
                Booking
              </Button>
            </Box>
          </Box>
        ) : null}
      </Center>
    </ScrollView>
  );
}
