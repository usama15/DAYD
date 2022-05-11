import { useNavigation } from '@react-navigation/native';
import {Box, Center, Image, ScrollView, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import RoutesKey from '../../Components/Navigation/Route/routesKey';
import {GetUsersData} from './duck/operations';

const VentorChat = () => {
    const navigation = useNavigation()
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    GetUsersData().then((res: any) =>
      setUserData(res.filter(x => x.userType == 'user')),
    );
  }, []);
  console.log(userData);
  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="10px" mt="10">
          {userData &&
            userData.map((item, index) => (
              <TouchableOpacity
                onPress={() => {navigation.navigate(
                  RoutesKey.VENTORCHAT, {chat: item})
                }}>
                <Box
                  flexDirection="row"
                  mb="5"
                  borderRadius="10"
                  bg="white"
                  p="5">
                  <Image
                    borderRadius="10"
                    w="30%"
                    h="100%"
                    source={{uri: item?.userImage}}
                    alt="image"
                  />
                  <Box>
                    <Text>{item?.username}</Text>
                    <Text>{item?.email}</Text>
                  </Box>
                </Box>
              </TouchableOpacity>
            ))}
        </Box>
      </Center>
    </ScrollView>
  );
};

export default VentorChat;
