// src/utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Joke } from './getJoke';

const STORAGE_KEY = 'saved_jokes';

export const saveJoke = async (joke: Joke): Promise<void> => {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const jokes: Joke[] = existing ? JSON.parse(existing) : [];

    // Avoid duplicates by ID
    if (!jokes.find(j => j.id === joke.id)) {
      jokes.push(joke);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(jokes));
    }
  } catch (error) {
    console.error('Error saving joke:', error);
  }
};

export const getSavedJokes = async (): Promise<Joke[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error retrieving jokes:', error);
    return [];
  }
};

export const clearSavedJokes = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing jokes:', error);
  }
};
