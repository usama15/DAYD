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
import {GetConformOrderData} from './duck/operations';
import moment from 'moment';

let UserData: any = '';
const History = () => {
  const [udata, setUdata] = useState([]);

  useEffect(() => {
    getDataFromPhone('User')
      .then(res => {
        UserData = JSON.parse(res);
      })
      .then(async () => await Filter());
  }, [udata]);

  const Filter = async () => {
    GetConformOrderData().then((res: any) => {
      setUdata(
        res
          .filter((x: any) => x.email == UserData.email)
          .sort((a: any, b: any) => a - b)
          .reverse(),
      );
    });
  };

  const Accpet = async (item: any) => {};

  return (
    <ScrollView>
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          {udata.length ? (
            udata.map((data: any, index) => (
              <Box>
                <Box style={styles.mainBox}>
                  <Text style={styles.text}>
                    User Email:
                    <Text fontWeight="400">{data?.email}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Patient Name:
                    <Text fontWeight="400">{data?.patientName}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Phone No:
                    <Text fontWeight="400">{data?.phoneNo}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Address:
                    <Text fontWeight="400">{data?.Address}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Confirmation:
                    <Text fontWeight="400">{data?.confirmation}</Text>
                  </Text>
                  <Text style={styles.text}>
                    Date: 
                    <Text fontWeight="400">{moment(data?.createdAt).format('MM/DD/YYYY')}</Text>
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

export default History;
