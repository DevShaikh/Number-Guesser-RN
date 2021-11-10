import React, { useEffect, useState } from 'react'

// Expo
import * as Font from 'expo-font'

// React Native
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

// Custom Components
import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import RunningGameScreen from './screens/RunningGameScreen'
import GameOverScreen from './screens/GameOverScreen'
import AppLoading from 'expo-app-loading'

const fetchFonts = async () =>
  await Font.loadAsync({
    GemunuLibre: require('./assets/Fonts/GemunuLibre-Regular.ttf'),
    'GemunuLibre-Bold': require('./assets/Fonts/GemunuLibre-Bold.ttf'),
  })

// const fetchFonts = () => {

//     const cacheImages = images.map(image => {
//       return Asset.fromModule(image).downloadAsync();
//     });
//     return Promise.all(cacheImages);
// }

const App = () => {
  const [isReady, setIsReady] = useState(false)
  const [pastGuesses, setPastGuesses] = useState<number[]>([])
  const [userNumber, setUserNumber] = useState<number | null>(null)
  const [totalRounds, setTotalRounds] = useState<number>(0)
  const [isGameOver, setIsGameOver] = useState<boolean>(false)

  const startGameHandler = (number: number | null) => {
    setUserNumber(number)
  }

  const Screens = () => {
    if (!userNumber && !isGameOver) {
      return (
        <StartGameScreen number={userNumber} setUserNumber={startGameHandler} />
      )
    }
    if (userNumber && !isGameOver) {
      return (
        <RunningGameScreen
          userNumber={userNumber}
          setUserNumber={startGameHandler}
          setIsGameOver={setIsGameOver}
          setTotalRounds={setTotalRounds}
          totalRounds={totalRounds}
          pastGuesses={pastGuesses}
          setPastGuesses={setPastGuesses}
        />
      )
    }
    if (isGameOver) {
      return (
        <GameOverScreen
          setUserNumber={startGameHandler}
          userNumber={userNumber}
          setIsGameOver={setIsGameOver}
          setTotalRounds={setTotalRounds}
          totalRounds={totalRounds}
          pastGuesses={pastGuesses}
          setPastGuesses={setPastGuesses}
        />
      )
    }
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsReady(true)}
        onError={(e) => console.log(e)}
      />
    )
  }

  return (
    isReady && (
      // Wrapper
      <View style={styles.container}>
        <StatusBar style='inverted' backgroundColor='#00000055' />
        <Header title='Number Guesser' />
        {Screens()}
      </View>
    )
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
