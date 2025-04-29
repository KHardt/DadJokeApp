// import * as SQLite from 'expo-sqlite';
// import { Joke } from './getJoke';

// const db = SQLite.openDatabase('jokes.db');

// export const initDb = (): void => {
//   db.transaction(tx => {
//     tx.executeSql(
//       `CREATE TABLE IF NOT EXISTS jokes (
//         id TEXT PRIMARY KEY NOT NULL,
//         joke TEXT NOT NULL
//       );`,
//       [],
//       () => console.log('Table created or already exists'),
//       (_, error) => {
//         console.error('Table creation error', error);
//         return true;
//       }
//     );
//   });
// };

// export const saveJoke = (joke: Joke): Promise<void> => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'INSERT OR IGNORE INTO jokes (id, joke) VALUES (?, ?);',
//         [joke.id, joke.joke],
//         () => resolve(),
//         (_, error) => {
//           reject(error);
//           return false;
//         }
//       );
//     });
//   });
// };

// export const getSavedJokes = (): Promise<Joke[]> => {
//   return new Promise((resolve, reject) => {
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT * FROM jokes;',
//         [],
//         (_, result) => {
//           const jokes: Joke[] = [];
//           for (let i = 0; i < result.rows.length; i++) {
//             jokes.push(result.rows.item(i));
//           }
//           resolve(jokes);
//         },
//         (_, error) => {
//           reject(error);
//           return false;
//         }
//       );
//     });
//   });
// };
