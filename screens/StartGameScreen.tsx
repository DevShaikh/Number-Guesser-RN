import React, { FC, SetStateAction, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'

// Custom Components
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'

// Theme
import { colors } from '../styles/theme'

interface PropTypes {
  setUserNumber: (number: number) => void
  number: number | null
}

const StartGameScreen = ({ number, setUserNumber }: PropTypes) => {
  // State
  const [inputValue, setInputValue] = useState('')
  const [selectedNumber, setSelectedNumber] = useState<number>()
  const [isConfirmed, setIsConfirmed] = useState(false)

  // Events Handling
  const onInputChange = (value: string) => {
    setInputValue(value.replace(/[^0-9]/g, ''))
  }

  // Form Handling
  const resetForm = () => {
    setInputValue('')
  }

  const submitForm = () => {
    const choosedNumber = parseInt(inputValue)
    if (isNaN(choosedNumber) || choosedNumber < 1 || choosedNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetForm }]
      )
      return
    }

    Keyboard.dismiss()
    setIsConfirmed(true)
    setSelectedNumber(parseInt(inputValue))
    setInputValue('')
  }

  let resultOutput

  if (isConfirmed) {
    resultOutput = (
      <Card style={styles.resultContainer}>
        <Text>You've selected</Text>
        <NumberContainer number={selectedNumber!} />
        <Button
          title='Start Game'
          onPress={() => setUserNumber(selectedNumber!)}
        />
      </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.screenTitle}>Let's Play The Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a Number!</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitialize='none'
            autoCorrect={false}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={onInputChange}
            value={inputValue}
          />
          <View style={styles.formButtonContainer}>
            <View style={styles.formButton}>
              <Button
                title='Reset'
                onPress={resetForm}
                color={colors.secondary}
              />
            </View>
            <View style={styles.formButton}>
              <Button
                title='Confirm'
                onPress={submitForm}
                color={colors.primary}
              />
            </View>
          </View>
        </Card>
        {resultOutput}
      </View>
    </TouchableWithoutFeedback>
  )
}

// Styles
const styles = StyleSheet.create({
  // Start Game Screen Styles
  screen: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 24,
  },
  inputContainer: {
    maxWidth: '80%',
    width: 350,
    alignItems: 'center',
  },
  input: {
    textAlign: 'center',
    width: 50,
  },
  formButtonContainer: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formButton: {
    width: 100,
  },
  resultContainer: {
    alignItems: 'center',
    maxWidth: '50%',
    width: 200,
  },
})

export default StartGameScreen
