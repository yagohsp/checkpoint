import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const App = firebase.initializeApp({
  apiKey: "AIzaSyBOf-V7PUpvCUSvMLxnK20ujlzESvIm5yg",
  authDomain: "checkpoint-social-network-2021.firebaseapp.com",
  projectId: "checkpoint-social-network-2021",
  storageBucket: "checkpoint-social-network-2021.appspot.com",
  messagingSenderId: "681736559329",
  appId: "1:681736559329:web:6d92c88ac3bac7d73fb5a0",
  measurementId: "G-TXWEZQVC77"
});

export const db = firebase.firestore();

export default App;
