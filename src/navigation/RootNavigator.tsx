// src/navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SavedJokes from '../screens/SavedJokes';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dad Jokes" component={HomeScreen} />
      <Stack.Screen name="Saved Jokes" component={SavedJokes} />
    </Stack.Navigator>
  );
}
