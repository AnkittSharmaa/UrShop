// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBbPHIkPxKMGapdO_2xMAY_vuYXa0GdqvY",
  authDomain: "urshop-ba9a7.firebaseapp.com",
  projectId: "urshop-ba9a7",
  storageBucket: "urshop-ba9a7.appspot.com",
  messagingSenderId: "774456449831",
  appId: "1:774456449831:web:6ce13aea3ef4ccaf4f2702",
  measurementId: "G-CLVCF4F3F2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
