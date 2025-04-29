import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRandomJoke } from '../hooks/useRandomJoke';
import { saveJoke } from '../utils/storage'; // Assuming we switched to AsyncStorage
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import JokeCard from '../components/JokeCard'; // Your JokeCard component

type RootStackParamList = {
  'Dad Jokes': undefined;
  'Saved Jokes': undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Dad Jokes'>;

const HomeScreen = ({ navigation }: Props) => {
  const { joke, loadJoke } = useRandomJoke();
  const [showPunchline, setShowPunchline] = useState(false);

  const handleSave = async () => {
    if (joke) {
      await saveJoke(joke);
      alert('Joke saved!');
    }
  };

  const togglePunchline = () => {
    setShowPunchline((prev) => !prev);
  };

  const getQuestionAndPunchline = (jokeText: string) => {
    const [question, punchline] = jokeText.split('?');
    return { question: question + '?', punchline };
  };

  const hasQuestionMark = joke?.joke.includes('?');

  // Only run the loadJoke function once when the component mounts
  useEffect(() => {
    loadJoke(); // Load a joke when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <View style={styles.container}>
      {joke && (
        <>
          <JokeCard joke={getQuestionAndPunchline(joke.joke).question} />
          {hasQuestionMark && showPunchline && (
            <JokeCard joke={getQuestionAndPunchline(joke.joke).punchline} />
          )}

          {hasQuestionMark && (
            <TouchableOpacity style={styles.button} onPress={togglePunchline}>
              <Text style={styles.buttonText}>
                {showPunchline ? 'Hide Punchline' : 'Show Punchline'}
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}

      <Button title="😂 New Joke" onPress={loadJoke} />
      <Button title="❤️ Save Joke" onPress={handleSave} />
      <Button title="📚 Saved Jokes" onPress={() => navigation.navigate('Saved Jokes')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, gap: 20, flex: 1, justifyContent: 'center' },
  jokeText: { fontSize: 18, textAlign: 'center' },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomeScreen;
