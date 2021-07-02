// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxCp6lBCdn9N1_-Y2DlLWYsJseaMUZZoI",
  authDomain: "amznclonebydhawal.firebaseapp.com",
  projectId: "amznclonebydhawal",
  storageBucket: "amznclonebydhawal.appspot.com",
  messagingSenderId: "444373773921",
  appId: "1:444373773921:web:161646f5b581aed9c20420",
  measurementId: "G-CXFKP10DE1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
