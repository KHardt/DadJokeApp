import React from 'react';
import { Button } from 'react-native';

type Props = {
  onPress: () => void;
};

const SaveButton = ({ onPress }: Props) => (
  <Button title="Save Joke" onPress={onPress} />
);

export default SaveButton;
