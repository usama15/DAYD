import { Box, Text, Center, ScrollView, Image } from 'native-base'
import React from 'react'
import styles from './AdminHome.style'
import AntDesgin from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RoutesKey from '../../Components/Navigation/Route/routesKey'

const AdminHome = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <Center mt="5" px="3">
                <Box w="100%" p="10px">
                    <Box>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.REQUESTFROMDOCTOR)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>Request from Doctor</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.REQUESTFROMAMBULANCE)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>Request from Ambulance</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.DOCTORINFO)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>Doctor Info</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.AMBULANCEINFO)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>Ambulance Info</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.USERINFO)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>User Info</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.SILDERIMAGES)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>Silder Images</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Center>
        </ScrollView>
    )
}

export default AdminHome