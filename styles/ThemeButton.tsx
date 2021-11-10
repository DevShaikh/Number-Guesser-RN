import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { colors } from './theme'

interface PropTypes {
  onPress: () => void
  theme?: string
  children: JSX.Element | JSX.Element[] | string
}

const ThemeButton = ({ onPress, theme, children }: PropTypes) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
      <View
        style={[
          styles.button,
          { backgroundColor: theme ? theme : colors.primary },
        ]}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'GemunuLibre-Bold',
  },
})

export default ThemeButton
