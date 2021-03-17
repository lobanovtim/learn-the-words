import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDwxou0VjwBq-MifSdH1Fe5bOeH0vLj4-o",
  authDomain: "learn-the-words-6a952.firebaseapp.com",
  databaseURL: "https://learn-the-words-6a952-default-rtdb.firebaseio.com",
  projectId: "learn-the-words-6a952",
  storageBucket: "learn-the-words-6a952.appspot.com",
  messagingSenderId: "887037277182",
  appId: "1:887037277182:web:89afa1a96802f6947706af"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
const database = fire.database();

export default database;