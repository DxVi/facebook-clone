
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJvpdyYUcxF32CblC2uN4XWjs1KQingqk",
  authDomain: "facebook-clone-824e0.firebaseapp.com",
  databaseURL: "https://facebook-clone-824e0.firebaseio.com",
  projectId: "facebook-clone-824e0",
  storageBucket: "facebook-clone-824e0.appspot.com",
  messagingSenderId: "443064849513",
  appId: "1:443064849513:web:3f23cdca18f38d2db4fef8",
  measurementId: "G-X1X1P5X8ZH"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
