import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage(props) {
  let [avatar, setAvatar] = useState();
  let [userId, setUserId] = useState("");
  let [isLocalSet, setIsLocalSet] = useState(false);
  let [pageLoaded, setPageLoaded] = useState(false);
  let [annonceList, setAnnonceList] = useState([]);
  let [oldAnnonceId, setOldAnnonceId] = useState([]);

  useEffect(() => {  
    ( () => {
      AsyncStorage.getItem("avatar", function(error, data) {
        setAvatar(data)
      });
      AsyncStorage.getItem("id", function(error, data) {
        setUserId(data)
        setIsLocalSet(true)
      });
    })();

    const dataList = async() => {
      let sendParameter = {
        distance: 50
      }
      let rawResponse = await fetch('http://172.20.10.2:3000/annonceJob', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(sendParameter)
      })
    
      let response = await rawResponse.json()
      setAnnonceList(response)
    }
    dataList()

    const oldAnnoneData = async() => {
      let sendUserId = {
        userId: userId
      }
      let rawResponse = await fetch('http://172.20.10.2:3000/users/oldAnnonceList', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(sendUserId)
      })
    
      let response = await rawResponse.json()
      setOldAnnonceId(response)
    }
    if(isLocalSet) oldAnnoneData()

    setPageLoaded(true)
  }, []);

  const onProfilClick = () => {
    AsyncStorage.clear()
    props.navigation.navigate('WelcomePage')
  }

  const refuseAnnonce = () => {
    setAnnonceList((card) => card.filter((_, index) => index !== 0))
  }
  
  const accepteAnnonce = () => {
    setAnnonceList((card) => card.filter((_, index) => index !== 0))
  }
  
  const test = () => {
    for(let i=0; i<annonceList.length; i++){
      for(let y=0; y<oldAnnonceId.length; y++){
        if(annonceList[i]._id === oldAnnonceId[y].id){
          setAnnonceList((card) => card.filter((_, index) => index !== i))
        }
      }
    }
  }

  if(pageLoaded){
    test()
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
              source={require('../assets/button/calendar-gray.png')}
              style={styles.navbarButton}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate('ConversationPage')}>
            <Image
              source={require('../assets/button/send-gray.png')}
              style={styles.navbarButtonChat}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Would U like to do this job?</Text>
        {annonceList.map((annonce,i) => (
          <ImageBackground
            key={i}
            source={{uri: annonce.image[0].urlAddress}}
            imageStyle={{
              resizeMode: 'cover',
              borderRadius: 30,
              width: "100%",
              height: "100%"
            }}
            style={(i > 0)? {display: "none"}: styles.card}
          >
            <View style={styles.descriptionCard}>
              <Text style={styles.compagnyName}>{annonce.compagnyName}</Text>
              <Text style={styles.descriptionAnnonce}>- {annonce.jobName}</Text>
              <Text style={styles.descriptionAnnonce}>- {annonce.contract}</Text>
              <Text style={styles.descriptionAnnonce}>- {annonce.city}</Text>
              <Text style={styles.descriptionAnnonce}>- {annonce.regime}</Text>
            </View>
            <Ionicons
              name={'information-circle'}
              size={35} color={'#FFF'}
              style={styles.informationIcon}
              onPress={() => props.navigation.navigate('HomePage')}
            />
          </ImageBackground>
        ))}
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={() => refuseAnnonce()}>
            <Image
              source={require("../assets/button/cross.png")}
              style={styles.choiceIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => accepteAnnonce()}>
            <Image
              source={require("../assets/button/validate.png")}
              style={styles.choiceIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <Image
            source={{uri: avatar}}
            style={styles.avatar}
            onPress={() => props.navigation.navigate('HomePage')}
          />
          <Ionicons
            name={'calendar'}
            size={35} color={'#B9B9B9'}
            style={styles.returnButton}
            onPress={() => props.navigation.navigate('HomePage')}
          />
          <Ionicons
            name={'paper-plane'}
            size={35} color={'#B9B9B9'}
            style={styles.chatIcon}
            onPress={() => props.navigation.navigate('HomePage')}
          />
        </View>
        <Text style={styles.title}>Would U like to do this job?</Text>
        <View style={styles.cardLoading}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
        <View style={styles.containerButton}>
          <Image
              source={require("../assets/button/cross.png")}
              style={styles.choiceIcon}
              onPress={() => refuseAnnonce()}
            />
            <Image
              source={require("../assets/button/validate.png")}
              style={styles.choiceIcon}
              onPress={() => accepteAnnonce()}
            />
        </View>
      </View>
    )
  }
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
  chatIcon: {
    marginRight: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#7791DE"
  },
  cardLoading: {
    height: "60%",
    width: "95%",
    marginTop: 20,
    backgroundColor: "#707070",
    borderRadius: 30,
    justifyContent: 'center',
  },
  loadingText: {
    color: "#FFF",
    fontSize: 50,
    fontWeight: "700",
    textAlign: 'center',
  },
  card: {
    height: "60%",
    width: "95%",
    marginTop: 20,
    backgroundColor: "#707070",
    borderRadius: 30,
    justifyContent: 'space-between',
  },
  descriptionCard: {
    marginLeft: 30,
    marginTop: 40
  },
  compagnyName: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "600"
  },
  descriptionAnnonce: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "500"
  },
  informationIcon: {
    textAlign: "right",
    marginRight: 15,
    marginBottom: 15
  },
  containerButton: {
    flexDirection: "row",
    width: "100%",
    justifyContent: 'center',
    marginBottom: 10
  },
  choiceIcon: {
    marginBottom: 20,
    height: 85,
    width: 85,
    marginLeft: 30,
    marginRight: 30
  }
});