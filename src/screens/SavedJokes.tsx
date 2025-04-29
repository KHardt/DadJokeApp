// src/screens/SavedJokes.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import JokeList from '../components/JokeList';
import EmptyState from '../components/EmptyState';
import { Joke } from '../utils/getJoke';
import { getSavedJokes } from '../utils/storage'; // Import your storage utility

const SavedJokes = () => {
  const [savedJokes, setSavedJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const loadJokes = async () => {
      const jokes = await getSavedJokes();
      setSavedJokes(jokes);
    };

    loadJokes();
  }, []);

  return (
    <View style={styles.container}>
      {savedJokes.length > 0 ? <JokeList jokes={savedJokes} /> : <EmptyState />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default SavedJokes;
