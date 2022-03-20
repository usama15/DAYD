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
} from 'native-base';
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {ImageBackground, ActivityIndicator} from 'react-native';
import styles from './Dashboard.style';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import {GetUserData} from './duck/operations';
import RoutesKey from '../../Components/Navigation/Route/routesKey';
let lng = '';
const Dashboard = () => {
  const navigation = useNavigation();
  const [udata, setUdata] = useState([]);
  const [udata1, setUdata1] = useState([]);
  const [udata2, setUdata2] = useState([]);
  const [udata3, setUdata3] = useState([]);

  useEffect(() => {
    GetUserData().then(reponse => {
      const newdata2 = reponse.filter(x => x.userType == 'ambulance');
      const newdata = reponse.filter(x => x.userType == 'doctor');
      console.log(newdata);
      setUdata(newdata.filter(x => x.drType == 'General Physicians'));
      setUdata1(newdata.filter(x => x.drType == 'Specialist'));
      setUdata2(newdata.filter(x => x.drType == 'Dermatologist'));
      setUdata3(newdata2);
    });
  }, []);

  const [isFetching, setIsFetching] = useState(false);

  const fetchData = () => {
    setIsFetching(false);
  };

  const onRefresh = () => {
    setIsFetching(true);
    fetchData();
  };
  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="2px">
          <Box mt="5">
            <Box borderTopRightRadius="20" bg="#25A9B6" w="60%" mb="5">
              <Text fontSize="24" style={styles.Heading} ml="5%">
                General Physicians
              </Text>
            </Box>
            {udata != '' ? (
              <FlatList
                horizontal={true}
                flexDirection="row"
                data={udata}
                onRefresh={onRefresh}
                refreshing={isFetching}
                extraData={udata}
                renderItem={({item}) => (
                  <Box
                    borderRadius="20"
                    p="2"
                    borderWidth="1"
                    borderColor="black.100"
                    mr="7">
                    <ImageBackground
                      resizeMode="cover"
                      borderRadius={20}
                      style={{
                        opacity: 0.8,
                      }}
                      source={{uri: item.userType}}>
                      <Box style={styles.couseBox1} />
                    </ImageBackground>
                    <Text style={styles.courseHeading} fontSize="24">
                      {item.username}
                    </Text>
                    <Box mt="1" w="100" ml="auto" mr="2" mb="2">
                      <Button
                        rounded="20"
                        onPress={() =>
                          navigation.navigate(RoutesKey.DETAILINFO, {
                            data: item,
                          })
                        }>
                        Booking
                      </Button>
                    </Box>
                  </Box>
                )}
              />
            ) : (
              <ActivityIndicator color="#25A9B6" size="large" />
            )}
          </Box>
          <Box mt="10">
            <Box borderTopRightRadius="20" bg="#25A9B6" w="50%" mb="5">
              <Text fontSize="24" style={styles.Heading} ml="10%">
                Specialist
              </Text>
            </Box>
            {udata1 != '' ? (
              <FlatList
                horizontal={true}
                flexDirection="row"
                data={udata1}
                onRefresh={onRefresh}
                refreshing={isFetching}
                extraData={udata1}
                renderItem={({item}) => (
                  <Box
                    borderRadius="20"
                    p="2"
                    borderWidth="1"
                    borderColor="black.100"
                    mr="7">
                    <ImageBackground
                      resizeMode="cover"
                      borderRadius={20}
                      style={{
                        opacity: 0.8,
                      }}
                      source={{uri: item.userImage}}>
                      <Box style={styles.couseBox1} />
                    </ImageBackground>
                    <Text style={styles.courseHeading} fontSize="24">
                      {item.username}
                    </Text>
                    <Box mt="4" w="100" ml="auto" mr="2" mb="2">
                      <Button
                        rounded="20"
                        onPress={() =>
                          navigation.navigate(RoutesKey.DETAILINFO, {
                            data: item,
                          })
                        }>
                        Booking
                      </Button>
                    </Box>
                  </Box>
                )}
              />
            ) : (
              <ActivityIndicator color="#25A9B6" size="large" />
            )}
          </Box>
          <Box mt="10">
            <Box borderTopRightRadius="20" bg="#25A9B6" w="50%" mb="5">
              <Text fontSize="24" style={styles.Heading} ml="10%">
                Dermatologist
              </Text>
            </Box>
            {udata2 != '' ? (
              <FlatList
                horizontal={true}
                flexDirection="row"
                data={udata2}
                onRefresh={onRefresh}
                refreshing={isFetching}
                extraData={udata2}
                renderItem={({item}) => (
                  <Box
                    borderRadius="20"
                    p="2"
                    borderWidth="1"
                    borderColor="black.100"
                    mr="7">
                    <ImageBackground
                      resizeMode="cover"
                      borderRadius={20}
                      style={{
                        opacity: 0.8,
                      }}
                      source={{uri: item.userImage}}>
                      <Box style={styles.couseBox1} />
                    </ImageBackground>
                    <Text style={styles.courseHeading} fontSize="24">
                      {item.username}
                    </Text>
                    <Box mt="4" w="100" ml="auto" mr="2" mb="2">
                      <Button
                        rounded="20"
                        onPress={() =>
                          navigation.navigate(RoutesKey.DETAILINFO, {
                            data: item,
                          })
                        }>
                        Booking
                      </Button>
                    </Box>
                  </Box>
                )}
              />
            ) : (
              <ActivityIndicator color="#25A9B6" size="large" />
            )}
          </Box>
          <Box mt="10">
            <Box borderTopRightRadius="20" bg="#25A9B6" w="50%" mb="5">
              <Text fontSize="24" style={styles.Heading} ml="10%">
                Ambulance
              </Text>
            </Box>
            {udata3 != '' ? (
              <FlatList
                horizontal={true}
                flexDirection="row"
                data={udata3}
                onRefresh={onRefresh}
                refreshing={isFetching}
                extraData={udata3}
                renderItem={({item}) => (
                  <Box
                    borderRadius="20"
                    p="2"
                    borderWidth="1"
                    borderColor="black.100"
                    mr="7">
                    <ImageBackground
                      resizeMode="cover"
                      borderRadius={20}
                      style={{
                        opacity: 0.8,
                      }}
                      source={{uri: item.userImage}}>
                      <Box style={styles.couseBox1} />
                    </ImageBackground>
                    <Text style={styles.courseHeading} fontSize="24">
                      {item.username}
                    </Text>
                    <Box mt="4" w="100" ml="auto" mr="2" mb="2">
                      <Button
                        rounded="20"
                        onPress={() =>
                          navigation.navigate(RoutesKey.DETAILINFO, {
                            data: item,
                          })
                        }>
                        Booking
                      </Button>
                    </Box>
                  </Box>
                )}
              />
            ) : (
              <ActivityIndicator color="#25A9B6" size="large" />
            )}
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default Dashboard;
