import {
  Box,
  Text,
  Center,
  ScrollView,
  Image,
  Button,
  Radio,
  Input,
  Icon,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import styles from '../main.style';
import {getDataFromPhone} from '../../utils/localStore';
import firestore from '@react-native-firebase/firestore';
import {ActivityIndicator} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getUserHistory} from './duck/operations';

let UserData: any = '';
const PatientHistory = () => {
  const [udata, setUdata] = useState([]);

  useEffect(() => {
    getDataFromPhone('User')
      .then(res => {
        UserData = JSON.parse(res);
      })
      .then(async () => await Filter());
  }, [udata]);

  const Filter = async () => {
    getUserHistory().then((res: any) => {
      setUdata(
        res
          .filter((x: any) => x.UserEmail == UserData.email)
          .sort((a: any, b: any) => a - b)
          .reverse(),
      );
    });
  };

  return (
    <ScrollView>
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          {udata.length ? (
            udata.map((data: any, index) => (
              <Box>
                <Box style={styles.mainBox}>
                  <Text style={styles.text}>
                    Doctor name:
                    <Text fontWeight="400">{data?.DoctorEmail}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Doctor review:
                    <Text fontWeight="400">{data?.History}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Fee:
                    <Text fontWeight="400">{data?.Fee}</Text>
                  </Text>
                </Box>
              </Box>
            ))
          ) : (
            <ActivityIndicator size="large" color="black" />
          )}
        </Box>
      </Center>
    </ScrollView>
  );
};

export default PatientHistory;
