import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatPage() {
  let [messageInput, setMessageInput] = useState("");
  let [otherAvatar, setOtherAvatar] = useState();
  let [seeHourSend, setSeeHourSend] = useState(false);

  const onMessageClick = () => {
    if(seeHourSend){
      setSeeHourSend(false)
    } else {
      setSeeHourSend(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topPage}>
        <Ionicons
          name={'chevron-back'}
          size={40} color={'#7791DE'}
          style={{marginLeft: 10, marginBottom: 5}}
          onPress={() => props.navigation.navigate('ConversationPage')}
        />
        <View>
          <Image
            source={{uri: otherAvatar}}
            style={styles.avatarConversation}
          />
          <Text>Carrefour</Text>
        </View>
        <View style={{width: 40, marginRight: 10}}></View>
      </View>
      <ScrollView style={{flex: 1, width: "100%"}}>
        <View style={styles.containerMessage}>
          <TouchableOpacity onPress={() => onMessageClick()}>
            <View style={styles.boxMessage}>
              <Text style={styles.message}>Bonjour Jimmy,{"\n"}Merci pour votre intérêt pour DITB. Nous organisons les entretiens bientôt, nous vous tiendrons au courant. Belle journée!</Text>
            </View>
            <Text style={(seeHourSend)? styles.sendingMessage: {display: "none"}}>10:30</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerMessageOwner}>
          <TouchableOpacity onPress={() => onMessageClick()}>
            <View style={styles.boxMessageOwner}>
              <Text style={styles.messageOwner}>Bonjour Idris 👋🏼 {"\n"}Super. Belle journée également</Text>
            </View>
            <Text style={(seeHourSend)? styles.sendingMessage: {display: "none"}}>10:30</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <KeyboardAvoidingView behavior= 'position'>
        <View style={styles.containerField}>
          <View style={styles.leftContainerField}>
            <Ionicons
              name={'add-circle'}
              size={30} color={'#7791DE'}
              // style={styles.returnButton}
              // onPress={() => props.navigation.navigate('HomePage')}
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
            // onPress={() => props.navigation.navigate('HomePage')}
          />
        </View>
      </KeyboardAvoidingView>
      <View style={{marginBottom: 30}}/>
    </View>
  )
}

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
    backgroundColor: "#000"
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
    marginLeft: 40,
    color: "#B9B9B9"
  },
  sendingMessageOwner: {
    marginLeft: 40,
    color: "#B9B9B9"
  },
  containerField: {
    marginBottom: 10,
    width: 350,
    height: 40,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#707070",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  leftContainerField: {
    flexDirection: "row",
    marginLeft: 10,
  },
  textField: {
    width: 265,
    fontSize: 17,
    paddingLeft: 10,
  },
  sendIcon: {
    marginRight: 10,
  }
});