import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function SignInPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Ionicons
          name={'chevron-back-outline'}
          size={45} color={'#7791DE'}
          style={styles.returnButton}
          onPress={() => props.navigation.navigate('WelcomePage')}
        />
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
        />
        <Ionicons name={'chevron-back-outline'} size={45} color={'transparent'} />
      </View>
      <Text style={styles.textDescription}>The dream job platform, {"\n"}on a global scale.</Text>
      <Text style={styles.textSignUp}>Let's sign-up!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('TokenVerifyPage')}
      >
        <Text style={{color:"#fff", fontSize:20, fontWeight:'500'}}>Let's go!</Text>
      </TouchableOpacity>
      <Text style={styles.lineOr}>──────────   <Text style={styles.textOr}> Or </Text>   ──────────</Text>
      <View style={styles.rowLogo}>
        <Image
          style={styles.logoCompany}
          source={require('../assets/logo/GoogleLogo.png')}
        />
        <Image
          style={styles.logoCompany}
          source={require('../assets/logo/AppleLogo.png')}
        />
        <Image
          style={styles.logoCompany}
          source={require('../assets/logo/FacebookLogo.png')}
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
    // justifyContent: 'center',
  },
  containerTop: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 150,
    width: "100%",
    // backgroundColor: "red",
    marginTop: 60
  },
  returnButton: {
    marginLeft: 10,
  },
  logo: {
    marginTop: 50,
    width: 143,
    height: 100,
  },
  textDescription: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
    fontWeight: '600',
  },
  textSignUp: {
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
  lineOr: {
    color: "#C9C9C9"
  },
  textOr: {
    color: "#000",
    marginTop: 10,
    fontSize: 15,
    fontWeight: "700",
  },
  rowLogo: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    marginTop: 20
  },
  logoCompany: {
    marginHorizontal: 15,
    width: 40,
    height: 40,
  }
});