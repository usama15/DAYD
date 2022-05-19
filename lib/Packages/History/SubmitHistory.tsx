import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  ScrollView,
  Text,
  TextArea,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {getDataFromPhone} from '../../utils/localStore';
import {createHistory, updateHistory} from './duck/operations';

const SubmitHistory = (props: any) => {
  const [userHistory, setUserHsitory] = useState<string>('');
  const [fee, setFee] = useState<string>('');
  const {userData} = props?.route?.params;
  const [userdata, setData] = useState('');

  useEffect(() => {
    getDataFromPhone('User').then(res => setData(JSON.parse(res)));
  }, []);
  const submit = () => {
    let data = {
      History: userHistory,
      Fee: fee,
      UserEmail: userData?.email,
      DoctorEmail: userdata?.username,
    };
    let data1 = {
      History: true,
    };
    createHistory(data).then(response => {
      updateHistory(userData?._id, data1).then(res => {
        props.navigation.pop();
      });
    });
  };
  return (
    <ScrollView>
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          <Heading>Add User History</Heading>
          <Box mt="8">
            <TextArea
              borderRadius="10"
              mb="10"
              onChangeText={(text: string) => setUserHsitory(text)}
              placeholder="Enter User History"
            />
            <Input
              mb="10"
              keyboardType="numeric"
              onChangeText={(text: string) => setFee(text)}
              placeholder="Enter Fee Amount"
            />
            <Button borderRadius="30" h="48px" onPress={() => submit()}>
              Submit
            </Button>
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default SubmitHistory;
