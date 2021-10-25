import React, {
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

interface PropTypes {
  setUserNumber: (number: number) => void
  setIsGameOver: React.Dispatch<SetStateAction<boolean>>
  setTotalRounds: React.Dispatch<SetStateAction<number>>
  userNumber: number
  totalRounds: number
}

const generateRandomNumber = (
  min: number = 1,
  max: number = 100,
  exc: number = 0
): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const AIChoosed = Math.floor(Math.random() * (max - min)) + min
  if (exc === AIChoosed) {
    return generateRandomNumber(min, max, exc)
  }
  return AIChoosed
}

const RunningGameScreen = ({
  userNumber,
  setUserNumber,
  setIsGameOver,
  setTotalRounds,
  totalRounds,
}: PropTypes) => {
  // States
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100))
  const [rounds, setRounds] = useState(1)
  const currLow = useRef<number>(1)
  const currHigh = useRef<number>(100)

  // Checking Is Game Over
  useEffect(() => {
    if (currentGuess === userNumber) {
      setIsGameOver(true)
      setTotalRounds(rounds)
    }
  }, [currentGuess, userNumber, setIsGameOver])

  // Guess Again Handler
  const guessAgainHandler = (dir: 'lower' | 'greater') => {
    if (
      (dir === 'lower' && currentGuess < userNumber) ||
      (dir === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", 'You know that this is wrong...', [
        {
          text: 'Sorry!',
          style: 'cancel',
        },
      ])
      return
    }

    if (dir === 'lower') {
      currHigh.current = currentGuess
    }
    if (dir === 'greater') {
      currLow.current = currentGuess
    }

    setCurrentGuess(
      generateRandomNumber(currLow.current, currHigh.current, currentGuess)
    )
    setRounds((rounds) => rounds + 1)
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guest</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttonsContainer}>
        <Button title='LOWER' onPress={guessAgainHandler.bind(this, 'lower')} />
        <Button
          title='GREATER'
          onPress={guessAgainHandler.bind(this, 'greater')}
        />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    maxWidth: '80%',
    width: 200,
  },
})

export default RunningGameScreen
