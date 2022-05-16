import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AddCVPage(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nice to meet <Text style={{color:'#7791DE'}}>U</Text>, Jimmy 👋🏼</Text>
      <Text style={{fontSize: 30, textAlign:'center', paddingBottom: 30, color:"#7791DE", fontWeight: '600' }}>Let's set up Ur profile!</Text>
      <TouchableOpacity style={styles.button1} onPress={() => {props.navigation.navigate('AddTypeJobPage')}}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:'500'}}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingTop:100,
    paddingBottom: 100,
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
  title: {
    fontSize: 30,
    textAlign:'center',
    color:"#000",
    fontWeight: '600',
    marginBottom: 20    
  },
  buttonAddPicture: {
    width:150,
    height:150,
    borderRadius:500,
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor: "#B9B9B9",
    borderStyle: 'dashed',
    marginBottom: 20
  },
  input: {
    marginBottom: 20,
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
  input2: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "500",
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: "80%",
    height: 150,
    textAlign: 'center',
    paddingBottom:100,
    alignItems:'flex-start',
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