import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDSl3ZkXiJtq087BdIt3I9Sly1WWP3pmX4",

  authDomain: "fir-e7703.firebaseapp.com",

  projectId: "fir-e7703",

  storageBucket: "fir-e7703.appspot.com",

  messagingSenderId: "177784963002",

  appId: "1:177784963002:web:ac4f74c9743dfcd8696783",

  measurementId: "G-8B5379PBFC",
});

const auth = firebase.auth();


export {auth} ;
