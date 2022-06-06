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
  View,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from '../main.style';
import {getDataFromPhone} from '../../utils/localStore';
import {ActivityIndicator} from 'react-native';
import {GetOrderData, OrderConform, deleteOrder} from './duck/operations';
import moment from 'moment';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

let UserData: any = '';
const DoctorRequest = () => {
  const [udata, setUdata] = useState([]);
  useEffect(() => {
    getDataFromPhone('User')
      .then(res => {
        UserData = JSON.parse(res);
      })
      .then(async () => await Filter());
  }, []);

  const Filter = async () => {
    GetOrderData().then((res: any) => {
      setUdata(
        res
          .filter((x: any) => x.vendorEmail == UserData.email)
          .sort((a: any, b: any) => a - b)
          .reverse(),
      );
    });
  };

  const Accpet = async (item: any) => {
    let data = {
      patientName: item.patientName,
      phoneNo: item.phoneNo,
      email: item.email,
      vendorEmail: item.vendorEmail,
      Address: item.Address,
      confirmation: 'Accept',
      History: 'false',
      Gender: item.Gender
    };
    await OrderConform(data).then((res: any) => {
      if (res.success == true) {
        del(item._id);
      }
    });
  };
  const Reject = async (item: any) => {
    let data = {
      patientName: item.patientName,
      phoneNo: item.phoneNo,
      email: item.email,
      vendorEmail: item.vendorEmail,
      Address: item.Address,
      confirmation: 'Reject',
      History: 'true',
      Gender: item.Gender
    };
    await OrderConform(data).then((res: any) => {
      if (res.success == true) {
        del(item._id);
      }
    });
  };

  const del = async (id: any) => {
    await deleteOrder(id);
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
                    Date:
                    <Text fontWeight="400">
                      {moment(data?.createdAt).format('MM/DD/YYYY')}
                    </Text>
                  </Text>
                  <Box w="100%" h="80">
                    <View style={styles.container}>
                      <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                          latitude: data?.Address?.coords?.latitude,
                          longitude: data?.Address?.coords?.longitude,
                          latitudeDelta: 0.1,
                          longitudeDelta: 0.1,
                        }}>
                        <Marker
                          coordinate={{
                            latitude: data?.Address?.coords?.latitude,
                            longitude: data?.Address?.coords?.longitude,
                          }}
                        />
                      </MapView>
                    </View>
                  </Box>
                  <Box flexDirection="row" mt="3">
                    <Button w="50%" mr="1" onPress={() => Accpet(data)}>
                      Accept
                    </Button>
                    <Button w="50%" onPress={() => Reject(data)}>
                      Reject
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

export default DoctorRequest;
