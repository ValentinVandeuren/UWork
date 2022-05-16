import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function TokenVerifyPage(props) {
  let [token, setToken] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  
  const onTokenClick = () => {
    AsyncStorage.getItem("token", function(error, data) {
      if(data === token){
        props.navigation.navigate('CreateProfilPage')
      }else {
        setErrorMessage("Token invalid")
      }
     });
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
      <Text style={styles.textDescription}>Verfify your email {"\n"}address.</Text>
      <Text style={styles.textTokenInsert}>Insert your token!</Text>
      <TextInput
        style={styles.input}
        placeholder="123-ABC"
        onChangeText={(value) => setToken(value)}
        value={token}
      />
      <Text style={(errorMessage.length > 0)? styles.errorMessageStyle: {display: "none"}}>{errorMessage}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => onTokenClick()}
      >
        <Text style={{color:"#fff", fontSize:20, fontWeight:'500'}}>Let's go!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width:143,
    height:100,
    marginTop:100
  },
  textDescription: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
    fontWeight: '600',
  },
  textTokenInsert: {
    marginTop: 40,
    marginBottom: 50,
    color: "#7791DE",
    fontSize: 25,
    fontWeight: "500",
  },
  input: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "500",
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: "80%",
    height: 50,
    textAlign: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 9,
  },
  button: {
    borderRadius:25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#7791DE',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    elevation: 9,
    shadowRadius: 3.84,
    shadowOffset : { width: 0, height: 3 },
    color: "#fff",
    marginBottom: 20,
    marginTop: 20,
    height: 50,
    width: 200,
    justifyContent:"center",
    alignItems:'center',
  },
  errorMessageStyle:{
    color: "red",
    marginTop: 20,
  },
});