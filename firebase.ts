import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCymruz6EkHrTV7LeRfA8NoMJWi4X4R5GY",
  authDomain: "super-store-1aa2c.firebaseapp.com",
  projectId: "super-store-1aa2c",
  storageBucket: "super-store-1aa2c.appspot.com",
  messagingSenderId: "289968330349",
  appId: "1:289968330349:web:bbf443312faa4c25575164",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
