import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from "@react-navigation/native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function CallendarPage(props) {
  const isFocused = useIsFocused();

  let [avatar, setAvatar] = useState();
  let [userId, setUserId] = useState("");
  let [dayWeek, setDayWeek] = useState("");
  let [date, setDate] = useState();

  useEffect(() => {  
    ( () => {
      AsyncStorage.getItem("id", function(error, data) {
        if(isFocused){
        const getProfile = async () => {
          let sendID = {id: data}
          let rawResponse = await fetch('https://uworkapp.herokuapp.com/users/displayProfile', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(sendID)
          })
          let response = await rawResponse.json()
          setAvatar(response.avatar)
        }
        getProfile()
        setUserId(data)
      }
      });
    })();

    let newDate = new Date();
    let day = newDate.getDay();
    let newDateNumber = newDate.getDate()

    if(day == 0){
      setDayWeek("Sunday")
    } else if(day === 1){
      setDayWeek("Monday")
    } else if(day === 2){
      setDayWeek("Tuesday")
    } else if(day === 3){
      setDayWeek("Wednesday")
    } else if(day === 43){
      setDayWeek("Thursday")
    } else if(day === 5){
      setDayWeek("Friday")
    } else if(day === 6){
      setDayWeek("Saturday")
    }

    setDate(newDateNumber)
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <TouchableOpacity onPress={() => props.navigation.navigate('HomePage')}>
          <Image
            source={require('../../assets/button/home-gray.png')}
            style={styles.navbarButtonHome}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('CalendarPage')}>
          <View style={styles.calendarIcon}>
            <Text style={styles.dayWeek}>{dayWeek}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('ConversationPage')}>
          <Image
            source={require('../../assets/button/send-gray.png')}
            style={styles.navbarButtonChat}
          />
        </TouchableOpacity>
      </View>
        <View style={styles.calendarContainer}>
        <Calendar
          style={{
            marginTop: 20,
            height: 375,
            width: 400,
          }}
        markedDates={{
          '2022-05-16': {marked: true, dotColor: '#7791DE'},
          '2022-05-18': {marked: true, dotColor: '#7791DE'},
        }}
      />
        </View>

        <View style={styles.upcomingContainer}>
          <ScrollView>
          <Text style={{color:'#fff', fontSize:30, fontWeight:"600", textAlign:'center', marginBottom:30}}>Upcoming</Text>

          <View style={styles.containerEvent}>
            <View>
              <View style={styles.dateEventBadge}>
                <Text style={styles.dateEvent}>29</Text>
              </View>
            </View>
            <View>
              <Text style={styles.titleEvent}>Interview</Text>
              <Text style={styles.subTitleEvent}>Cowboy</Text>
              <Text style={styles.subTitleEvent}>12:30pm</Text>
            </View>
          
          </View>
          <View style={styles.containerEvent}>
            <View>
              <View style={styles.dateEventBadge}>
                <Text style={styles.dateEvent}>29</Text>
              </View>
            </View>
            <View>
              <Text style={styles.titleEvent}>Interview</Text>
              <Text style={styles.subTitleEvent}>Cowboy</Text>
              <Text style={styles.subTitleEvent}>12:30pm</Text>
            </View>
          
          </View>
          <View style={styles.containerEvent}>
            <View>
              <View style={styles.dateEventBadge}>
                <Text style={styles.dateEvent}>29</Text>
              </View>
            </View>
            <View>
              <Text style={styles.titleEvent}>Interview</Text>
              <Text style={styles.subTitleEvent}>Cowboy</Text>
              <Text style={styles.subTitleEvent}>12:30pm</Text>
            </View>
          
          </View>
          </ScrollView>
        </View>
        


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  calendarContainer:{
    // flex:1,
    // justifyContent:'center',
    // backgroundColor:'red',
  },
  upcomingContainer:{
    flex:1,
    width:'95%',
    // justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'#7791DE',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingTop:20,
    paddingBottom:20,
  },
  containerEvent:{
    flexDirection:'row',
    alignItems:'baseline',
    width:350,
    marginBottom:30,

  },
  dateEvent:{
    color: '#7791DE',
    fontSize:18,
    fontWeight:"600",
    paddingBottom:1,
    paddingTop:1,
  },
  dateEventBadge: {
    borderRadius:100, 
    backgroundColor:'#fff', 
    marginRight:10,
    padding:2,
    width:28,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
  },
  titleEvent:{
    color: '#fff',
    fontSize:25,
    fontWeight:"600"
  },
  subTitleEvent:{
    color: '#fff',
    fontSize:15,
    fontWeight:"500",
    marginBottom:2
  },
  navBar: {
    marginTop: 75,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  navbarButtonHome: {
    height: 40,
    width: 40,
    marginLeft: 30,
  },
  navbarButtonChat: {
    height: 40,
    width: 40,
    marginRight: 30,
  },
  calendarIcon: {
    height: 50,
    width: 50,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#7791DE",
    alignItems: "center",
    justifyContent: "center",
  },
  dayWeek: {
    fontSize: 6.5,
    fontWeight: "900",
    color: "#7791DE",
    textAlign:'center'
  },
  date: {
    fontSize: 20,
    fontWeight: "900",
    color: "#7791DE",
    textAlign:'center'
  },
});