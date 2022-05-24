import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  Modal,
  Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import { useIsFocused } from "@react-navigation/native";


export function ChatPage(props) {
  let [userId, setUserId] = useState("");
  let [otherUserId, setOtherUserId] = useState("");

  let [messageInput, setMessageInput] = useState("");
  let [otherAvatar, setOtherAvatar] = useState();
  let [otherUserName,  setOtherUserName] = useState("");
  let [seeHourSend, setSeeHourSend] = useState(false);
  let [message, setMessage] = useState([]);

  const isFocused = useIsFocused();
  const scrollViewRef = useRef();
  let [modalVisible, setModalVisible] = useState(false)

  let arrayConversation = [];
  const loadConversation = async() => {
    let responseConversation = await fetch(`http://172.20.10.5:3000/chat/getChat/${props.conversationId}`)
    let response = await responseConversation.json()
    arrayConversation.push(response.messages);
    if(userId === response.compagnyOwner){
      setOtherUserId(response.employeeOwner)
    }else {
      setOtherUserId(response.compagnyOwner)
    }
    setMessage(arrayConversation)
  }
  const loadInformationUser = async() => {
    let sendID = {id: otherUserId}
    let responseUserInfo = await fetch('http://172.20.10.5:3000/users/foundCompagnyInfo', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(sendID)
    })
    let responseFromBack = await responseUserInfo.json();
    setOtherAvatar(responseFromBack.userAvatar);
    setOtherUserName(responseFromBack.userName);
  }

  useEffect(() => {  
    ( () => {
      AsyncStorage.getItem("id", function(error, data) {
        setUserId(data);
      });
    })();
    if(isFocused){
      loadInformationUser()
      loadConversation()
    }
  }, [isFocused]);

  const onMessageClick = () => {
    if(seeHourSend){
      setSeeHourSend(false)
    } else {
      setSeeHourSend(true)
    }
  }

  const onSendMessageClick = async() => {
    if(messageInput.length >0){
      let sendInfo = {conversationId: props.conversationId, sender: userId, content: messageInput}
      let responseConversationSend = await fetch('http://172.20.10.5:3000/chat/sendMessage', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(sendInfo)
      })
      await responseConversationSend.json();
      loadConversation()
      setMessageInput("")
    }else {
      
    }
  }

  if(!otherAvatar){
    loadInformationUser()
  }

  if(message.length >= 0){
    return (
      <View style={styles.container}>
        <View style={styles.topPage}>
          <Ionicons
            name={'chevron-back'}
            size={40} color={'#7791DE'}
            style={{marginLeft: 10, marginBottom: 5}}
            onPress={() => props.navigation.navigate('ConversationPage')}
          />
          <View style={{alignItems: "center"}}>
            <Image
              source={{uri: otherAvatar}}
              style={styles.avatarConversation}
            />
            <Text>{otherUserName}</Text>
          </View>
          <View style={{width: 40, marginRight: 10}}></View>
        </View>
        <ScrollView
          style={{flex: 1, width: "100%"}}
          ref={scrollViewRef}
          onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
        >
          {message[0]?.map((messages,i) => (
            <View key={i} style={(userId === messages.sender)?styles.containerMessageOwner: styles.containerMessage}>
              <TouchableOpacity onPress={() => onMessageClick()}>
                <View style={(userId === messages.sender)?styles.boxMessageOwner: styles.boxMessage}>
                  <Text style={(userId === messages.sender)?styles.messageOwner: styles.message}>{messages.content}</Text>
                </View>
                <Text style={(seeHourSend)? (userId === messages.sender)?styles.sendingMessageOwner: styles.sendingMessage: {display: "none"}}>{messages.date}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <KeyboardAvoidingView behavior= 'position'>
          <View style={styles.containerField}>
            <View style={styles.leftContainerField}>
              <Ionicons
                name={'add-circle'}
                size={30} color={'#7791DE'}
                onPress={() => setModalVisible(true)}
              />
              <TextInput
                style={styles.textField}
                placeholder="Text Message"
                onChangeText={(value) => setMessageInput(value)}
                value={messageInput}
              />
            </View>
            <Ionicons
              name={'paper-plane-outline'}
              size={30} color={'#7791DE'}
              style={styles.sendIcon}
              onPress={() => onSendMessageClick()}
            />
          </View>
        </KeyboardAvoidingView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modal}>
            <View style={styles.containerModal}>
              <Text style={{marginLeft: 35}}></Text>
              <View style={{flexDirection: "row", alignItems: 'center'}}>
                <Ionicons
                  name={'attach'}
                  size={30} color={'#7791DE'}
                  onPress={() => setModalVisible(false)}
                />
                <Text style={styles.textModal}>Join document</Text>
              </View>
              <Ionicons
                name={'close'}
                size={20} color={'#000'}
                style={styles.closeIcon}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
        <View style={{marginBottom: 30}}/>
      </View>
    )
  }else {
    return (
      <View>
        <Text>nul!</Text>
      </View>
    )
  }
}

function mapStateToProps(state){
  return{
    conversationId: state.conversationId
  }
}
  
export default connect(mapStateToProps, null)
(ChatPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topPage: {
    height: 175,
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#C9C9C9",
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 20
  },
  avatarConversation: {
    height: 60,
    width: 60,
    borderRadius: 40,
    marginBottom: 5,
    backgroundColor: "#B9B9B9"
  },
  containerMessage: {
    alignItems: 'flex-start'
  },
  containerMessageOwner: {
    alignItems: 'flex-end',
  },
  boxMessage: {
    padding: 10,
    margin: 10,
    marginLeft: 20,
    backgroundColor: "#EDEEF0",
    borderRadius: 10,
    maxWidth: 300,
  },
  boxMessageOwner: {
    padding: 10,
    margin: 10,
    marginRight: 20,
    backgroundColor: "#7791DE",
    borderRadius: 10,
    maxWidth: 300,
  },
  message: {
    fontWeight: "400",
  },
  messageOwner: {
    fontWeight: "400",
    color: "#FFF",
  },
  sendingMessage: {
    marginLeft: 20,
    color: "#B9B9B9",
    textAlign: 'left',
  },
  sendingMessageOwner: {
    marginRight: 20,
    color: "#B9B9B9",
    textAlign: 'right'
  },
  containerField: {
    marginTop: 30,
    marginBottom: 10,
    width: 375,
    height: 40,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#707070",
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  leftContainerField: {
    flexDirection: "row",
    marginLeft: 10,
  },
  textField: {
    width: 290,
    fontSize: 17,
    paddingLeft: 10,
  },
  sendIcon: {
    marginRight: 10,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  containerModal: {
    height: 75,
    width: "80%",
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  closeIcon: {
    marginBottom: 40,
    marginRight: 10
  },
  textModal: {
    fontSize: 20,
    fontWeight: "600",
    color: "#7791DE"
  }
});