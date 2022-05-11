import {Image} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {GetSilderData} from '../Packages/DashBoard/duck/operations';

const Silder = () => {
  const [silderImage, setSilderImage] = useState([]);
  useEffect(() => {
    GetSilderData().then(response => {
      setSilderImage(response);
    });
  }, []);
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={0}
        // showPagination
      >
        {silderImage.map((item, index) => (
          <View style={[styles.child]}>
            <Image
              style={styles.img}
              source={{
                uri: item.Image,
              }}
            />
          </View>
        ))}
      </SwiperFlatList>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'transparent'},
  child: {width: width, height: '100%', marginBottom: '60%', borderRadius: 10},
  img: {
    width: '93%',
    height: '100%',
    borderRadius: 20
    // borderRadius: 30,
  },
});

export default Silder;
