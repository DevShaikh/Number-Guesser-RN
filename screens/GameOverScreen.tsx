import React, { SetStateAction } from 'react'
import { Button, Image, StyleSheet, View } from 'react-native'

import Text from '../styles/Text'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
import { colors } from '../styles/theme'
import PastGuessesList from '../components/PastGuessesList'
import ThemeButton from '../styles/ThemeButton'

interface PropTypes {
  setIsGameOver: React.Dispatch<SetStateAction<boolean>>
  setTotalRounds: React.Dispatch<SetStateAction<number>>
  setPastGuesses: React.Dispatch<SetStateAction<number[]>>
  pastGuesses: number[]
  setUserNumber: (number: number | null) => void
  totalRounds: number
  userNumber: number | null
}

const GameOverScreen = ({
  setIsGameOver,
  setTotalRounds,
  setUserNumber,
  totalRounds,
  userNumber,
  pastGuesses,
  setPastGuesses,
}: PropTypes) => {
  const gameRestartHandler = () => {
    setUserNumber(null)
    setIsGameOver(false)
    setTotalRounds(0)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.gameOverImg}
          source={require('../assets/gameOver.png')}
        />
      </View>
      <Card style={styles.cardBox}>
        <View style={{ alignItems: 'center' }}>
          <Text>Number Was</Text>
          <Text>{userNumber}</Text>
        </View>
        <View style={styles.resultTextContainer}>
          <Text style={styles.resultText}>
            Your phone took <Text style={styles.highlight}>{totalRounds} </Text>
            rounds to guess the number{' '}
            <Text style={styles.highlight}>{userNumber}</Text>
          </Text>
        </View>

        <ThemeButton onPress={gameRestartHandler}>New Game</ThemeButton>
      </Card>
      <PastGuessesList list={pastGuesses} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    maxWidth: '80%',
    width: 200,
    alignItems: 'center',
  },
  cardBox: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexBasis: 150,
  },
  imageContainer: {
    width: '100%',
    height: 100,
  },
  gameOverImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  highlight: {
    color: colors.primary,
    textDecorationLine: 'underline',
  },
  resultTextContainer: {
    marginBottom: 5,
  },
  resultText: {
    textAlign: 'center',
  },
})

export default GameOverScreen
