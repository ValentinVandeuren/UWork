import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";

export default function ConversationPage(props) {
    let [avatar, setAvatar] = useState();
    let [userId, setUserId] = useState("");
    let [searchInput, setSearchInput] = useState("");
    let [conversationList, setConversationList] = useState([]);
    let [hour, setHour] = useState([]);
    let [lastMessage, setLastMessage] = useState([]);
    let [userisSet, setUserIsSet] = useState(false);

    useEffect(() => {  
        ( () => {
          AsyncStorage.getItem("avatar", function(error, data) {
            setAvatar(data)
          });
          AsyncStorage.getItem("id", function(error, data) {
            setUserId(data);
            setUserIsSet(true);
          });
        })();
    }, []);

    if(userisSet){
        const dataConversation = async() => {
            let sendUser = {
            id: userId
            }
            let rawResponse = await fetch('http://172.20.10.2:3000/chat/foundConversation', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendUser)
            })
        
            let response = await rawResponse.json()
            setConversationList(response)

            for(let i=0; i<response.length; i++){
                let lastItem = response[i].messages[response[i].messages.length -1]
                let newDate = new Date(lastItem.date)
                let hours = newDate.getHours();
                let minutes = newDate.getMinutes();
                let fullHour = `${hours}:${minutes}`;
                setHour([...hour, fullHour]);
            }
            // for(let i=0; i<response.length; i++){
            //     let lastItem = response[i].messages[response[i].messages.length -1].content
            //     setLastMessage([...lastMessage, lastItem])
            // }
        }
        dataConversation();
        setUserIsSet(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => onProfilClick()}>
                    <Image
                    source={{uri: avatar}}
                    style={styles.avatar}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                    source={require('../../assets/button/calendar-gray.png')}
                    style={styles.navbarButton}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('ConversationPage')}>
                    <Image
                    source={require('../../assets/button/send-mauve.png')}
                    style={styles.navbarButtonChat}
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}><Text style={styles.uTitle}>U</Text>r chat</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                onChangeText={(value) => setSearchInput(value)}
                value={searchInput}
                autoCapitalize = 'none'
            />
            <View style={styles.containerConversation}>
                {conversationList.map((conversation,i) => (
                    <TouchableOpacity key={i} onPress={() => props.navigation.navigate('ChatPage')}>
                        <View style={styles.hr}/>
                        <View style={styles.conversationCard}>
                            <View style={styles.leftConversationCard}>
                                <Image
                                    source={{uri: avatar}}
                                    style={styles.avatarConversation}
                                />
                                <View style={styles.contentDescriptionCard}>
                                    <Text style={styles.titleConversation}>{(userId === conversation.compagnyOwner)? conversation.employeeOwner: conversation.compagnyOwner}</Text>
                                    <Text style={styles.contentConversation}>Hello Valentin, enchanté de faire votre ...</Text>
                                </View>
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{color: "#B9B9B9"}}>{hour[i]}</Text>
                                <Ionicons
                                     name={'chevron-forward-outline'}
                                    size={15} color={'#B9B9B9'}
                                    style={styles.returnButton}
                                    onPress={() => props.navigation.navigate('HomePage')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    navBar: {
      marginTop: 75,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    avatar: {
      height: 50,
      width: 50,
      borderRadius: 30,
      marginLeft: 30,
    },
    navbarButton: {
      height: 40,
      width: 40,
    },
    navbarButtonChat: {
      height: 40,
      width: 40,
      marginRight: 30,
    },
    title: {
        fontSize: 30,
        fontWeight: "600",
        marginTop: 20
    },
    uTitle: {
        color: "#7791DE"
    },
    searchInput: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "500",
        backgroundColor: "#EDEEF0",
        borderRadius: 10,
        width: "90%",
        height: 40,
        paddingLeft: 30,
    },
    containerConversation: {
        flex: 1,
        width: "90%",
        alignItems: 'center',
        backgroundColor: "red"
    },
    hr: {
        height: 1,
        width: "90%",
        marginTop: 10,
        backgroundColor: "#C5C6CA",
        borderRadius: 5,
    },
    conversationCard: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 10,
        backgroundColor: "#000"
    },
    leftConversationCard: {
        flexDirection: "row",
        margin: 0,
        // backgroundColor: "#000"
    },
    avatarConversation: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    titleConversation: {
        fontSize: 17,
        fontWeight: "500"
    },
    contentConversation: {
        fontSize: 15,
        color: "#949598"
    }
});