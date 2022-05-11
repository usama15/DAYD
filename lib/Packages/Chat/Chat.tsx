import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Platform,
  Dimensions,
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
  Pressable,
} from 'react-native';
// Import the UI styles.
// import styles from './components/Style'
import Icon from 'react-native-vector-icons/Ionicons';
import {getDataFromPhone} from '../../utils/localStore';
import {GiftedChat} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/core';
import moment from 'moment';

export default function Chat(props: any) {
  const isFocused = useIsFocused();
  //   const chat = useRef(null);
  // const [roomId, setRoomId] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [companyId, setCompanyId] = useState('0');
  const [currentUser, setCurrentUser] = useState();
  const [currentUserId, setCurrentUserId] = useState();
  const [messages, setMessages] = useState([]);
  const [chatRoom, setChatRoom] = useState({});
  const {chat} = props?.route?.params;
  console.log(chat);
  useEffect(() => {
    chkUser();
  }, [isFocused]);

  const chkUser = async () => {
    let userData = await getDataFromPhone('User');
    // console.log(userData, 'resres');
    userData = JSON.parse(userData);
    setCurrentUser(userData);
    User(userData);
  };
  useEffect(() => {
    // getUser();
  }, []);

  const toDateTime = async (secs: number) => {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
  };
  const User = async (user: any) => {
    console.log(user, 'user');

    await firestore()
      .collection('Chats')
      .doc('users')
      .collection(user?._id?.toString())
      .orderBy('createdAt', 'desc')
      .limit(50)
      .onSnapshot(snapshot => {
        // const msgs:any = [];
        // documentSnapshot?.forEach(async (documentSnapshot, index) => {
        //   documentSnapshot.data().createdAt = await toDateTime(
        //     documentSnapshot.data().createdAt.seconds,
        //   );
        //   msgs.push(documentSnapshot.data());s
        // });
        const newPost = snapshot?.docs?.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(newPost.filter(x => x.user.ventorId == chat._id));
      });
  };
  console.log(messages, 'mesages');

  const onSend = useCallback(async (messages = [], user) => {
    console.log(user, 'currentUser');
    if (user) {
      let message = {
        _id: messages[0]._id,
        text: messages[0].text,
        createdAt: new Date(),
        ventorEmail: chat?.email,
        userEmail: user?.email,
        user: {
          _id: user?._id,
          ventorId: chat?._id,
          name: user?.username,
          avatar: 'https://placeimg.com/140/140/any',
        },
      };

      firestore()
        .collection('Chats')
        .doc('users')
        .collection(user?._id.toString())
        .add(message)
        .then(() => {
          console.log('User added!');
        });
      // setMessages(previousMessages =>
      //   GiftedChat.append(previousMessages, messages),
      // );
    }
  }, []);

  //   const setModalVisiblity = visible => {
  //     setModalVisible(visible);
  //   };

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages, currentUser)}
        user={{
          _id: currentUser !== undefined ? currentUser?._id : '',
        }}
      />
    </View>
  );
}

const dimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: dimensions.width,
    backgroundColor: '#ffffff',
  },
  profileImage: {
    // marginHorizontal: 10,
    width: 18,
    height: 18,
    borderRadius: 100,
  },
  icon: {
    marginRight: 15,
    fontSize: 25,
    color: '#340459',
    alignSelf: 'center',
  },
  max: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: dimensions.width,
    padding: 15,
    justifyContent: 'space-between',
    paddingTop: 40,
    marginBottom: 10,
    backgroundColor: 'black',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(61,39,255,0.2)',
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowRadius: 5,
        shadowOpacity: 0.8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  buttonHolder: {
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    backgroundColor: '#0093E9',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
  },
  fullView: {
    width: dimensions.width,
    height: dimensions.height - 100,
  },
  remoteContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    top: 5,
  },
  remote: {
    width: 150,
    height: 150,
    marginHorizontal: 2.5,
    // backgroundColor: "#0093E9"
  },
  noUserText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#0093E9',
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  centeredView: {
    backgroundColor: '#e0e0e0',
    opacity: 0.9,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  //   button: {
  //     borderRadius: 20,
  //     padding: 10,
  //     elevation: 2
  //   },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
