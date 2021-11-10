import React, {
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Alert, Button, ScrollView, StyleSheet, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import Text from '../styles/Text'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'
import ThemeButton from '../styles/ThemeButton'
import PastGuessesList from '../components/PastGuessesList'

interface PropTypes {
  setUserNumber: (number: number) => void
  setIsGameOver: React.Dispatch<SetStateAction<boolean>>
  setTotalRounds: React.Dispatch<SetStateAction<number>>
  setPastGuesses: React.Dispatch<SetStateAction<number[]>>
  pastGuesses: number[]
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
  setPastGuesses,
  pastGuesses,
}: PropTypes) => {
  // States
  const initialGuess = generateRandomNumber(1, 100)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const currLow = useRef<number>(1)
  const currHigh = useRef<number>(100)

  // Checking Is Game Over
  useEffect(() => {
    if (currentGuess === userNumber) {
      setIsGameOver(true)
      setTotalRounds(pastGuesses.length)
    }
  }, [currentGuess, userNumber, setIsGameOver])

  useEffect(() => {
    setPastGuesses([initialGuess])
  }, [])

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
      currLow.current = currentGuess + 1
    }

    const newNumber = generateRandomNumber(
      currLow.current,
      currHigh.current,
      currentGuess
    )

    setCurrentGuess(newNumber)
    // setRounds((rounds) => rounds + 1)
    setPastGuesses((currArray: number[]) => [newNumber, ...currArray])
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guest</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttonsContainer}>
        <ThemeButton onPress={guessAgainHandler.bind(this, 'lower')}>
          <AntDesign name='caretdown' size={24} color='white' />
        </ThemeButton>
        <ThemeButton onPress={guessAgainHandler.bind(this, 'greater')}>
          <AntDesign name='caretup' size={24} color='white' />
        </ThemeButton>
      </Card>
      <PastGuessesList list={pastGuesses} />
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
    width: 300,
  },
})

export default RunningGameScreen
