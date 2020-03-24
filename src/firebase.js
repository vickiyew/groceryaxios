import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA_1X9Nqia2OR6j5lNIjOMVCHh-gQKiy88",
  authDomain: "btproject-7a794.firebaseapp.com",
  databaseURL: "https://btproject-7a794.firebaseio.com",
  projectId: "btproject-7a794",
  storageBucket: "btproject-7a794.appspot.com",
  messagingSenderId: "241364801554",
  appId: "1:241364801554:web:74238dcd1e047555d120cb",
  measurementId: "G-5BCBSKZPEP"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;