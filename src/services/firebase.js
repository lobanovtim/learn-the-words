import firebase from 'firebase/app';
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBLY_u38lMw8CH26I2P97i9HM4KQIdxb2Y",
    authDomain: "learn-the-words-e6f4b.firebaseapp.com",
    databaseURL: "https://learn-the-words-e6f4b-default-rtdb.firebaseio.com",
    projectId: "learn-the-words-e6f4b",
    storageBucket: "learn-the-words-e6f4b.appspot.com",
    messagingSenderId: "793399942043",
    appId: "1:793399942043:web:0d9ba6ea7d7c104ec91f3e"
  };


firebase.initializeApp(firebaseConfig);

export const fire = firebase;
const database = fire.database();

export default database;