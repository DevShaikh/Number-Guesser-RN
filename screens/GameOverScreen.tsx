import React, { SetStateAction } from 'react'
import { Button, Text, View } from 'react-native'

interface PropTypes {
  setIsGameOver: React.Dispatch<SetStateAction<boolean>>
  setTotalRounds: React.Dispatch<SetStateAction<number>>
  setUserNumber: (number: number | null) => void
  totalRounds: number
}

const GameOverScreen = ({
  setIsGameOver,
  setTotalRounds,
  setUserNumber,
  totalRounds,
}: PropTypes) => {
  const gameRestartHandler = () => {
    setUserNumber(null)
    setIsGameOver(false)
    setTotalRounds(0)
  }

  return (
    <View>
      <Text>Rounds Count: {totalRounds}</Text>
      <Text>Game Over!</Text>
      <Button title='Restart' onPress={gameRestartHandler} />
    </View>
  )
}

export default GameOverScreen
