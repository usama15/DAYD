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
import styles from '../main.style';
import {getDataFromPhone} from '../../utils/localStore';
import {ActivityIndicator} from 'react-native';
import {GetConformOrderData} from './duck/operations';
import {useNavigation} from '@react-navigation/native'
import RoutesKey from '../../Components/Navigation/Route/routesKey';
import moment from 'moment';
let UserData: any = '';
const DoctorConformRequest = () => {
  const [udata, setUdata] = useState([]);
  const navigation = useNavigation()
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
          .filter((x: any) => x.vendorEmail == UserData.email)
          .sort((a: any, b: any) => a - b)
          .reverse(),
      );
    });
  };

  const Accpet = async (item: any) => {
    navigation.navigate(RoutesKey.SUBMITHISTORY, {userData: item})
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
                  <Box flexDirection="row" mt="3">
                    <Button
                      w="50%"
                      isDisabled={data.History == true ? true : false}
                      mr="1"
                      onPress={() => Accpet(data)}>
                      Submit History
                    </Button>
                  </Box>
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

export default DoctorConformRequest;
