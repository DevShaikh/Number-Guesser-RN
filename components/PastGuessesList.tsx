import React from 'react'

import { ScrollView, StyleSheet, View } from 'react-native'
import Text from '../styles/Text'
import Card from './Card'

interface PropTypes {
  list: number[]
}

const PastGuessesList = ({ list }: PropTypes) => {
  return (
    <View style={styles.pastGuessesContainer}>
      <Text style={[styles.title, { marginBottom: 10 }]}>Past Guesses</Text>
      <ScrollView style={styles.pastGuessesList}>
        {list.map((guess, index) => (
          <View key={guess} style={styles.listItem}>
            <Text>Round-{list.length - index}:</Text>

            <Text style={{ fontFamily: 'GemunuLibre-Bold' }}>{guess}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
  },
  pastGuessesContainer: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    height: 150,
  },
  pastGuessesList: {
    paddingHorizontal: 20,
    width: '100%',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 3,
    paddingBottom: 3,
  },
})

export default PastGuessesList
