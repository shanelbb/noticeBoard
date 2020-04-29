import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmSix-wdSV4tDARg3NL-kualIgw0uRz0s",
    authDomain: "noticeboard-b9420.firebaseapp.com",
    databaseURL: "https://noticeboard-b9420.firebaseio.com",
    projectId: "noticeboard-b9420",
    storageBucket: "noticeboard-b9420.appspot.com",
    messagingSenderId: "595528946730",
    appId: "1:595528946730:web:d9053d6e53bd9e36405f53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;