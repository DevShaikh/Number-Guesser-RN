import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface PropTypes {
  children: string | number | JSX.Element | JSX.Element[]
  style?: object
}

const Heading = ({ children, style }: PropTypes) => {
  return <Text style={[styles.title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'GemunuLibre-Bold',
    fontSize: 24,
  },
})

export default Heading
