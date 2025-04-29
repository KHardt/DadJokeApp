export interface Joke {
    id: string;
    joke: string;
  }
  
  export const getRandomJoke = async (): Promise<Joke> => {
    const response = await fetch('https://icanhazdadjoke.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            joke {
              id
              joke
            }
          }
        `,
      }),
    });
  
    const json = await response.json();
    return json.data.joke;
  };
  