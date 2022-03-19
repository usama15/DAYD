import { Box, Text, Center, ScrollView, Image } from 'native-base'
import React from 'react'
import styles from './DoctorHome.style'
import AntDesgin from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import RoutesKey from '../../Components/Navigation/Route/routesKey'

const DoctorHome = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <Center mt="5" px="3">
                <Box w="100%" p="10px">
                    <Box>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.DOCTORREQUEST)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>Request from Patient</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(RoutesKey.DOCTORREQUESTCONFORM)}>
                            <Box style={styles.mainBox}>
                                <Text style={styles.text}>Conform Request</Text>
                                <AntDesgin name='arrowright' style={styles.icon} size={23} color='black' />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </Box>
            </Center>
        </ScrollView>
    )
}

export default DoctorHome