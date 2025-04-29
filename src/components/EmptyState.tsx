import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const EmptyState = () => (
  <View style={styles.container}>
    <Text style={styles.text}>No jokes saved yet!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#888',
  },
});

export default EmptyState;
