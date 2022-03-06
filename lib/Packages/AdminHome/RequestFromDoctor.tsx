import {Box, Text, Center, ScrollView, Image, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import styles from './main.style';
import {getVendorData, RegisterDoctor} from './duck/operations';
import GridImageView from 'react-native-grid-image-viewer';
const RequestFromDoctor = () => {
  const [udata, setUdata] = useState([]);
  useEffect(() => {
    getVendorData().then(res => {
      setUdata(res.filter(x => x.userType == 'doctor'));
    });
  }, []);

  const Delete = () => {
    console.log('del');
  };
  const Accpet = async udata => {
    let data = {
      username: udata?.username,
      email: udata?.email,
      phoneNo: udata?.phoneNo,
      password: udata?.password,
      userType: udata?.userType,
    };
    await RegisterDoctor(data).then(res => console.log(res));
  };
  return (
    <ScrollView>
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          {udata.map(data => (
            <Box>
              <Box style={styles.mainBox}>
                <GridImageView data={[data?.drCert]} />
                <Text style={styles.text}>
                  User name: <Text fontWeight="400">{data?.username}</Text>
                </Text>
                <Text style={styles.text}>
                  User email: <Text fontWeight="400">{data?.email}</Text>
                </Text>
                <Text style={styles.text}>
                  User phone: <Text fontWeight="400">{data?.phoneNo}</Text>
                </Text>
                <Text style={styles.text}>
                  Cnic Number: <Text fontWeight="400">{data?.cnicNumber}</Text>
                </Text>
                <Box mt="4" flexDirection="row" alignSelf="center">
                  <Button w="40" mr="2" onPress={() => Accpet(data)}>
                    Accpet
                  </Button>
                  <Button w="40" onPress={() => Delete()}>
                    Delete
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Center>
    </ScrollView>
  );
};

export default RequestFromDoctor;
