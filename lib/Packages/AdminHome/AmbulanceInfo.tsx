import {Box, Text, Center, ScrollView, Image, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import styles from './main.style';
import {deleteUser, GetUserData} from './duck/operations';
import GridImageView from 'react-native-grid-image-viewer';
const AmbulanceInfo = () => {
  const [udata, setUdata] = useState([]);
  useEffect(() => {
    GetUserData().then(res => {
      setUdata(res.filter(x => x.userType == 'ambulance'));
    });
  }, [udata]);

  const Delete = async id => {
    await deleteUser(id);
  };

  console.log(udata?.[0]);
  return (
    <ScrollView>
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          {udata.map(data => (
            <Box>
              <Box style={styles.mainBox}>
                <GridImageView data={[data?.userImage, data?.LicenseNumber]} />
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
                  Address: <Text fontWeight="400">{data?.Address}</Text>
                </Text>
                <Text style={styles.text}>
                  Cnic Number: <Text fontWeight="400">{data?.cnicNumber}</Text>
                </Text>
                <Text style={styles.text}>
                  Vehicle Number:{' '}
                  <Text fontWeight="400">{data?.vehicleNumber}</Text>
                </Text>
                <Box mt="4" flexDirection="row" alignSelf="center">
                  <Button w="40" onPress={() => Delete(data._id)}>
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

export default AmbulanceInfo;
