import React from 'react';
import { FlatList } from 'react-native';
import JokeCard from './JokeCard';

type Props = {
  jokes: { id: string; joke: string }[];
};

const JokeList = ({ jokes }: Props) => (
  <FlatList
    data={jokes}
    keyExtractor={item => item.id}
    renderItem={({ item }) => <JokeCard joke={item.joke} />}
  />
);

export default JokeList;
