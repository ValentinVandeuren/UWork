import { View, StyleSheet, Image, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'


export default function WelcomePage(props) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <View style={{alignItems:'center', marginTop:125}}>
          <Text style={{fontSize: 30, textAlign:'center', paddingBottom: 30, color:"#000", fontWeight: '600' }}>Welcome on Uwork 👋🏼</Text>
          <Text style={{fontSize: 25, textAlign:'center', paddingBottom: 30, color:"#000", fontWeight:'500' }}>Who are <Text style={{color:'#7791DE'}}>U</Text>?</Text>
          <TouchableOpacity style={styles.button1} onPress={() => {props.navigation.navigate('AddCVPage')}}>
            <Text style={{color:"#fff", fontSize:20, fontWeight:'600'}}>Company</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={() => {props.navigation.navigate('SignUpPage')}}>
            <Text style={{color:"#fff", fontSize:20, fontWeight:'500'}}>Employee</Text>
          </TouchableOpacity>
          <Text style={{marginBottom:10, fontSize:15, fontWeight:'500'}}>Or</Text>
          <TouchableOpacity style={styles.button2} onPress={() => {props.navigation.navigate('SignInPage')}}>
            <Text style={{color:"#7791DE", fontSize:20, fontWeight:'500'}}>Sign-in</Text>
          </TouchableOpacity>
      </View>
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
  button1: {
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
    color:"#fff",
    marginBottom:10,
    height:50,
    width: 200,
    justifyContent:"center",
    alignItems:'center',
  },
  button2: {
    borderRadius:25,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    elevation: 9,
    shadowRadius: 3.84,
    shadowOffset : { width: 0, height: 3 },
    color:"#fff",
    marginBottom:10,
    height:50,
    width: 200,
    justifyContent:"center",
    alignItems:'center',
    borderWidth:3,
    borderColor:"#7791DE"
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
});