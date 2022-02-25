import {Box, Text, Center, ScrollView, Image, Button} from 'native-base';
import {Linking} from 'react-native';
import React from 'react';

const DoctorRegistar = () => {
  const whatsapp = () => {
    let url = 'mailto:dayd@gmail.com?subject=Doctor Registration'
    Linking.openURL(url)
  };
  return (
    <ScrollView>
      <Center flex={1} px="3">
        <Box w="100%" p="10px">
          <Box p="5" mt="50%">
            <Text fontSize="24" fontFamily="Merriweather" textAlign="center">
              For Doctor's Registration Please Eail all your info and documents
            </Text>
          </Box>
          <Button mt="10%" borderRadius="20" onPress={() => whatsapp()}>
            Contact US
          </Button>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default DoctorRegistar;
