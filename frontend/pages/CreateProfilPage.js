import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image  } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function CreateProfilPage(props) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  var imageProfile;
  if(!image){
    imageProfile = <Text style={{color:"#B9B9B9", fontSize:100, fontWeight:'100', paddingBottom:8}}>+</Text>
  } else {
    imageProfile = <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius:150 }} />
  }

  return (
      <KeyboardAwareScrollView style={{backgroundColor:"#fff"}}>
        <View style={styles.inner}>
          <Text style={styles.title}>Complete <Text style={{color:'#7791DE'}}>U</Text>r profile</Text>
          <TouchableOpacity style={styles.buttonAddPicture} onPress={pickImage}>
            {imageProfile}
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={(value) => setFirstName(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={(value) => setLastName(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Age"
            onChangeText={(value) => setAge(value)}

          />
          <TextInput
            style={styles.input}
            placeholder="City"
            onChangeText={(value) => setCity(value)}

          />
          <TextInput
            style={styles.input2}
            placeholder="Bio"
            onChangeText={(value) => setBio(value)}
          />
            <TouchableOpacity style={styles.button1} onPress={() => {props.navigation.navigate('AddCVPage'), console.log(image)}}>
              <Text style={{color:"#fff", fontSize:20, fontWeight:'500'}}>Continue</Text>
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
    color:"#000",
    fontWeight: '600',
    marginBottom: 20    
  },
  buttonAddPicture: {
    width:150,
    height:150,
    borderRadius:500,
    flex:1,
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
  inner: {
    alignItems:'center',
    backgroundColor:'#fff',
    marginTop: 100,
  },
});