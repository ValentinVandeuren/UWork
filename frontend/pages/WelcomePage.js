import { View, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function WelcomePage(props) {
  return (
    <View style={styles.container}>
      <Button
      title='WelcomePage'
      onPress={() => props.navigation.navigate('SignInPage')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    
  }
});