import React, { SetStateAction } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { colors } from '../styles/theme'

// Custom Components
import Card from './Card'

// Interfaces
interface PropTypes {
  number: number | null
}

const NumberContainer = ({ number }: PropTypes) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{number && number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 1,
    borderColor: colors.secondary,
    marginVertical: 15,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  numberText: {
    fontSize: 18,
  },
})

export default NumberContainer
