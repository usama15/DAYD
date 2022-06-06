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
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

const AddImage = () => {
  const [img, setImg] = useState('');
  const [img1, setImg1] = useState('');
  const [imgData, setImgData] = useState('');
  const [name, setName] = useState('');
  const [newimage, setnewimage] = useState('');

  useEffect(() => {
    getImagesData().then(res => {
      setImgData(res);
    });
  }, []);
  const uploadImgOne = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(async image => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImg1(imageUri);
      let imgName = image.path.substring(image.path.lastIndexOf('/') + 1);
      const reference = storage().ref(imgName);
      setnewimage(imgName);
      try {
        reference
          .putFile(imageUri)
          .then(() => {
            alert('Image Stored');
          })
          .then(async () => {
            // await getImageURL();
          });
      } catch (error) {
        console.log(error);
      }
    });
  };

  async function getImageURL() {
    return await storage()
      .ref(newimage)
      .getDownloadURL()
      .then(uri => {
        setImg(uri);
        return uri;
      })
      .catch(e => console.log(e));
  }

  const submit = () => {
    getImageURL().then(res => { 

      let data = {
        Image: res,
        Name: name,
      };
      SilderImagePost(data).then(() => {
        setName('');
      });
    })
  };
  const DeleteImage = id => {
    deleteSilderImage(id);
  };
  // console.log(imgData);
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
            {imgData.length &&
              imgData.map((item, index) => (
                <Box
                  p="2"
                  flexDirection="row"
                  mt="4"
                  borderRadius="10"
                  bg="white">
                  <Image
                    ml="5"
                    h="40"
                    w="40%"
                    resizeMode="contain"
                    alt="img"
                    source={{uri: item.Image}}
                  />
                  <Box mt="5" ml="2" w="50%">
                    <Text mb="5" mt="2" fontSize="18">
                      Name: {item.Name}
                    </Text>
                    <Button
                      borderRadius="10"
                      h="38px"
                      onPress={() => DeleteImage(item?._id)}>
                      Delete
                    </Button>
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
