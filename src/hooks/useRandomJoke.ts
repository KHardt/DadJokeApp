import { useEffect, useState } from 'react';
import { Joke, getRandomJoke } from '../utils/getJoke';

export const useRandomJoke = () => {
  const [joke, setJoke] = useState<Joke | null>(null);

  const loadJoke = async () => {
    const result = await getRandomJoke();
    setJoke(result);
  };

  useEffect(() => {
    loadJoke();
  }, []);

  return { joke, loadJoke };
};
