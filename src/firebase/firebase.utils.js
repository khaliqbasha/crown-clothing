import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDsLqty2oxCoKl0VUdnFcrwFu0qxeHzfKE",
    authDomain: "crown-db-7ce46.firebaseapp.com",
    projectId: "crown-db-7ce46",
    storageBucket: "crown-db-7ce46.appspot.com",
    messagingSenderId: "436396390554",
    appId: "1:436396390554:web:99def431bbb2bcf2748723",
    measurementId: "G-7LVXXG0FXK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;