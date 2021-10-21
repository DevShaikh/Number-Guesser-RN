import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'

interface PropTypes {
  setUserNumber: (number: number) => void
  number: number | null
}

type NumberGeneratorProps = {
  min: number | null
  max: number | null
  exclude: number | null
}

const generateRandomNumber = (
  min: number,
  max: number,
  exc: number
): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const AIChoosed = Math.floor(Math.random() * (max - min)) + min

  if (AIChoosed === exc) {
    return generateRandomNumber(min, max, exc)
  } else {
    return AIChoosed
  }
}

const RunningGameScreen = ({ number, setUserNumber }: PropTypes) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guest</Text>
      <NumberContainer number={number} />
      <Card style={styles.buttonsContainer}>
        <Button title='LOWER' onPress={() => {}} />
        <Button title='GREATER' onPress={() => {}} />
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
