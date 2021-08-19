import firebase from 'firebase/app';
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZytO3JOoENwn3S3rSi7vQC32wl0Hhyk8",
  authDomain: "checkpoint-59fd0.firebaseapp.com",
  projectId: "checkpoint-59fd0",
  storageBucket: "checkpoint-59fd0.appspot.com",
  messagingSenderId: "679006618977",
  appId: "1:679006618977:web:0206669841b4b1fd5c7120",
  measurementId: "G-PEFXJMCP70"
} 

export default firebase.initializeApp(config);