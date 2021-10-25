import React from 'react'
import { StyleSheet, Text as Para } from 'react-native'

interface PropTypes {
  children: string | number | JSX.Element | JSX.Element[]
  style?: object
}

const Text = ({ children, style }: PropTypes) => {
  return <Para style={[styles.text, style]}>{children}</Para>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'GemunuLibre',
  },
})

export default Text
