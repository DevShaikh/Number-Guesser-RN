import React, { SetStateAction } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

interface PropTypes {
  setIsGameOver: React.Dispatch<SetStateAction<boolean>>
  setTotalRounds: React.Dispatch<SetStateAction<number>>
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
}: PropTypes) => {
  const gameRestartHandler = () => {
    setUserNumber(null)
    setIsGameOver(false)
    setTotalRounds(0)
  }

  return (
    <Card style={styles.screen}>
      <Text style={styles.title}>Game Over!</Text>
      <NumberContainer number={userNumber} />
      <View style={{ alignItems: 'center' }}>
        <Text>Rounds Count</Text>
        <Text>{totalRounds}</Text>
      </View>

      <Button title='New Game' onPress={gameRestartHandler} />
    </Card>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
  },
  screen: {
    maxWidth: '80%',
    width: 200,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexBasis: 140,
  },
})

export default GameOverScreen
