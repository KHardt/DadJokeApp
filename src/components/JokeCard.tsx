import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  joke: string;
};

const JokeCard = ({ joke }: Props) => (
  <View style={styles.card}>
    <Text style={styles.text}>{joke}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#eee',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default JokeCard;
