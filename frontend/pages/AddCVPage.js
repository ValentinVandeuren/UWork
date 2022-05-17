import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcon from 'react-native-vector-icons/Ionicons';


export default function AddCVPage(props) {

  const [firstName, setFirstName] = useState('');

  useEffect(() => {  
    ( () => {
      AsyncStorage.getItem("firstName", function(error, data) {
        setFirstName(data)
       });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nice to meet <Text style={{color:'#7791DE'}}>U</Text>, {"\n"}{firstName} 👋🏼</Text>
      <Text style={{fontSize: 30, textAlign:'center', color:"#7791DE", fontWeight: '600' }}>Let's set up Ur profile!</Text>
    <View style={styles.minicontainer}>
      <View style={styles.card}>
        <Text style={{fontSize: 20, color:'#B9B9B9', fontWeight:'600'}}>
          Education
        </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#7791DE', borderRadius:10, marginRight:5}}>
          <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {props.navigation.navigate('AddEducationPage')}}>
          <IonIcon name="add-outline" size={30} color="#7791DE"/>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.card}>
        <Text style={{fontSize: 20, color:'#B9B9B9', fontWeight:'600'}}>
          Experience
        </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#7791DE', borderRadius:10, marginRight:5}}>
          <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <IonIcon name="add-outline" size={30} color="#7791DE"/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={{fontSize: 20, color:'#B9B9B9', fontWeight:'600'}}>
          Languages
        </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#7791DE', borderRadius:10, marginRight:5}}>
          <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {props.navigation.navigate('AddLanguagePage')}}>
          <IonIcon name="add-outline" size={30} color="#7791DE"/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={{fontSize: 20, color:'#B9B9B9', fontWeight:'600'}}>
          Licence
        </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#7791DE', borderRadius:10, marginRight:5}}>
          <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <IonIcon name="add-outline" size={30} color="#7791DE"/>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={{fontSize: 20, color:'#B9B9B9', fontWeight:'600'}}>
          Skills
        </Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'#7791DE', borderRadius:10, marginRight:5}}>
          <Text style={styles.editText}>EDIT</Text>
          </TouchableOpacity>
          <TouchableOpacity>
          <IonIcon name="add-outline" size={30} color="#7791DE"/>
          </TouchableOpacity>
        </View>
      </View>
      </View>
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
    // backgroundColor:'red',
    width: "80%",

  }
});