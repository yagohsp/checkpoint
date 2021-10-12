import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const App = firebase.initializeApp({
  apiKey: "AIzaSyC7zfTXibAnlZEC20rWGz4Uk3-l4n2CHVo",
  authDomain: "checkpoint-socialnetwork.firebaseapp.com",
  projectId: "checkpoint-socialnetwork",
  storageBucket: "checkpoint-socialnetwork.appspot.com",
  messagingSenderId: "910853643133",
  appId: "1:910853643133:web:5deba1e7bc35c289e74a14",
  measurementId: "G-L25EHVKQD1"
});

export default App;
