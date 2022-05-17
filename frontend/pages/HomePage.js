import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage(props) {
  let [avatar, setAvatar] = useState("");

  useEffect(() => {  
    ( () => {
      AsyncStorage.getItem("avatar", function(error, data) {
        setAvatar(data)
        console.log(data);
       });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Image source={{uri: avatar}} style={styles.avatar}/>
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
      <ImageBackground
        source={require('../assets/backgroundHome.jpeg')}
        imageStyle={{
          resizeMode: 'cover',
          borderRadius: 30,
          width: "100%",
          height: "100%"
        }}
        style={styles.card}
      >
        <View style={styles.descriptionCard}>
          <Text style={styles.compagnyName}>Carrefour</Text>
          <Text style={styles.descriptionAnnonce}>- Developpeur</Text>
          <Text style={styles.descriptionAnnonce}>- Full time job</Text>
          <Text style={styles.descriptionAnnonce}>- Schaerbeek</Text>
          <Text style={styles.descriptionAnnonce}>- Remote</Text>
        </View>
        <Ionicons
          name={'information-circle'}
          size={35} color={'#FFF'}
          style={styles.informationIcon}
          onPress={() => props.navigation.navigate('HomePage')}
        />
      </ImageBackground>
      <View style={styles.containerButton}>
        <Ionicons
            name={'close-circle'}
            size={75}
            color={'#ED3535'}
            style={styles.choiceIcon}
            onPress={() => props.navigation.navigate('HomePage')}
          />
          <Ionicons
            name={'checkmark-circle'}
            size={75}
            color={'#1EBA84'}
            style={styles.choiceIcon}
            onPress={() => props.navigation.navigate('HomePage')}
          />
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
    borderRadius: "50%",
    marginLeft: 30,
  },
  chatIcon: {
    marginRight: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#7791DE"
  },
  card: {
    height: "60%",
    width: "95%",
    marginTop: 20,
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
    justifyContent: 'space-around',
    marginBottom: 10
  },
  choiceIcon: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,
  }
});