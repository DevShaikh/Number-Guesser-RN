import React from 'react'

// React Native
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// Custom Components
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'

const App = () => {
  return (
    // Wrapper
    <View style={styles.container}>
      <StatusBar style='inverted' backgroundColor='#00000055' />
      <Header title='Number Guesser' />
      <StartGameScreen />
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

export default App
