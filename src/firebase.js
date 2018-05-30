import * as firebase from 'firebase'
  // Initialize Firebase
 const config = {
    apiKey: "AIzaSyDiCa7zzIjXDxyxLAfjI95S3W8BH-fjdjw",
    authDomain: "note-dc934.firebaseapp.com",
    databaseURL: "https://note-dc934.firebaseio.com",
    projectId: "note-dc934",
    storageBucket: "note-dc934.appspot.com",
    messagingSenderId: "959682867606"
  };
  firebase.initializeApp(config);

  export const DB_CONFIG = firebase.database().ref('/notes');