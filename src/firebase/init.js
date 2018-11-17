import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBbHF5UoA14mNKLG1e7203Pu41Z5r0vnmA",
  authDomain: "udemy-ninja-chat-eko.firebaseapp.com",
  databaseURL: "https://udemy-ninja-chat-eko.firebaseio.com",
  projectId: "udemy-ninja-chat-eko",
  storageBucket: "udemy-ninja-chat-eko.appspot.com",
  messagingSenderId: "659803731599"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()