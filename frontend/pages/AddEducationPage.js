import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';

// import IonIcon from 'react-native-vector-icons/Ionicons';


export default function AddEducationPage(props) {
  return (
  <KeyboardAwareScrollView style={{backgroundColor:"#fff"}}>
    <Ionicons
      name={'chevron-back-outline'}
      size={45} color={'#7791DE'}
      style={styles.returnButton}
      onPress={() => props.navigation.navigate('AddCVPage')}
    />
    <View style={styles.inner}>
      <Text style={styles.title}>Add Education</Text>
      <TextInput
        style={styles.input}
        placeholder="School"
      />
      <TextInput
        style={styles.input}
        placeholder="Field of study"
      />
      <TextInput
        style={styles.input}
        placeholder="Degree obtained"
      />
      <View style={{flexDirection:'row', justifyContent:'space-between', width:"80%"}}>
      <TextInput
        style={styles.input3}
        placeholder="Start"
      />
      <TextInput
        style={styles.input3}
        placeholder="End"
      />
      </View>
      <TextInput
        style={styles.input2}
        placeholder="Description"
      />
        <TouchableOpacity style={styles.button1} onPress={() => props.navigation.navigate('AddCVPage')}>
          <Text style={{color:"#fff", fontSize:20, fontWeight:'500'}}>Save</Text>
        </TouchableOpacity>
    </View>
  </KeyboardAwareScrollView>
)
}

const styles = StyleSheet.create({
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
  color:"#7791DE",
  fontWeight: '600',
  marginBottom: 50    
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
  marginBottom: 30,
  fontSize: 20,
  fontWeight: "500",
  backgroundColor: "#FFF",
  borderRadius: 30,
  width: "80%",
  height: 140,
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
input3: {
  marginBottom: 20,
  fontSize: 20,
  fontWeight: "500",
  backgroundColor: "#FFF",
  borderRadius: 30,
  width: "48%",
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
card: {
  backgroundColor: "#fff",
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingRight: 10,
  paddingLeft: 10,
  alignItems: 'center',
  marginBottom: 30,
  fontWeight: "500",
  borderRadius: 15,
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
editText: {
  fontSize: 10, 
  color:'#fff', 
  padding:8,
  fontWeight: 'bold',
},
minicontainer: {
  flex: 1,
  justifyContent: 'center',
  width: "80%",
},
inner: {
  alignItems:'center',
  backgroundColor:'#fff',
  marginTop: 82,
  // backgroundColor:'red'
},
returnButton: {
  marginLeft: 10,
  marginTop:100,
},
});