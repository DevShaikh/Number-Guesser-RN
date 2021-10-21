import React, { useState } from 'react'

// React Native
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

// Custom Components
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import RunningGameScreen from './screens/RunningGameScreen'

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null)

  const startGameHandler = (number: number) => {
    setUserNumber(number)
  }

  return (
    // Wrapper
    <View style={styles.container}>
      <StatusBar style='inverted' backgroundColor='#00000055' />
      <Header title='Number Guesser' />
      {!userNumber && (
        <StartGameScreen
          number={userNumber}
          setUserNumber={startGameHandler!}
        />
      )}
      {userNumber && (
        <RunningGameScreen
          number={userNumber}
          setUserNumber={startGameHandler!}
        />
      )}
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
