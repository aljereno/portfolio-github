import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChvls-N3m9VEQZX_-9kCHLtkMaIooLtfw",
    authDomain: "genshin-abyss-progress.firebaseapp.com",
    projectId: "genshin-abyss-progress",
    storageBucket: "genshin-abyss-progress.appspot.com",
    messagingSenderId: "421528768503",
    appId: "1:421528768503:web:732b40907e46b23646a8f2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Allows for authentication, storage and firestore methods to be used in this project
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const auth = firebase.auth();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, auth, timestamp }