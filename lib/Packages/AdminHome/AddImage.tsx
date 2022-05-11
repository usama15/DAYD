import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  ScrollView,
  Text,
} from 'native-base';
import React, {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  SilderImagePost,
  deleteSilderImage,
  getImagesData,
} from './duck/operations';

const AddImage = () => {
  const [img, setImg] = useState('');
  const [imgData, setImgData] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    getImagesData().then(res => {
      setImgData(res);
    });
  }, [imgData]);
  const uploadImgOne = () => {
    const options = {
      quality: 1,
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const uri = response.assets[0].uri;
        const type = response.assets[0].type;
        const name = response.assets[0].fileName;
        const source = {
          uri,
          type,
          name,
        };
        cloudinaryUploadOne(source);
      }
    });
  };

  const cloudinaryUploadOne = image => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'hl08r4ih');
    data.append('cloud_name', 'da6xurnwg');
    fetch('https://api.cloudinary.com/v1_1/da6xurnwg/upload', {
      method: 'post',
      body: data,
    })
      .then(res => res.json())
      .then(data => {
        setImg(data.url);
      })
      .then(async () => await alert('Submit'))
      .catch(err => {
        alert(err);
      });
  };

  const submit = () => {
    let data = {
      Image: img,
      Name: name,
    };
    SilderImagePost(data).then(() => {setName('')})
  };
  const DeleteImage = id => {
    deleteSilderImage(id);
  };
  console.log(imgData);
  return (
    <ScrollView>
      <Center mt="5" px="3">
        <Box w="100%" p="10px">
          <Heading>Add Silder Image</Heading>
          <Box mt="8">
            <Input
              onChangeText={text => setName(text)}
              placeholder="Enter image name"
            />
            <Box mt="2" flexDirection="row">
              <Button
                mr="5"
                borderRadius="30"
                h="48px"
                onPress={() => uploadImgOne()}>
                Upload Image
              </Button>
              <Button borderRadius="30" h="48px" onPress={() => submit()}>
                Submit
              </Button>
            </Box>
          </Box>
          <Box>
            {imgData.length && imgData.map((item, index) => (
              <Box p='2' flexDirection="row" mt="4" borderRadius="10" bg="white">
                <Image
                  ml="5"
                  h="40"
                  w="40%"
                  resizeMode="contain"
                  alt='img'
                  source={{uri: item.Image}}
                />
                <Box mt='5' ml='2'>
                  <Text mb='5' mt='2' fontSize="18">Name: {item.Name}</Text>
                  <Button borderRadius="10" h="38px" onPress={() => DeleteImage(item?._id)}>Delete</Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Center>
    </ScrollView>
  );
};

export default AddImage;
