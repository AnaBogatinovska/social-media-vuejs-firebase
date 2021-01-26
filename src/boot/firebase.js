// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
// something to do
// }

import firebase from "firebase/app";

//firebase products i want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyA3E58R8C3O1s25d-Mhf56caOd6NL71dvM",
  authDomain: "social-media-instagram-fcfd3.firebaseapp.com",
  projectId: "social-media-instagram-fcfd3",
  storageBucket: "social-media-instagram-fcfd3.appspot.com",
  messagingSenderId: "20576077266",
  appId: "1:20576077266:web:5742b03f3479432181f40b"
};

// Initialize Firebase
 let firebaseApp = firebase.initializeApp(firebaseConfig);

let firebaseAuth  = firebaseApp.auth()
let firebaseDb = firebaseApp.firestore()

export { firebaseAuth, firebaseDb }
