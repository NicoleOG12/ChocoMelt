import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "firebase/auth"; 
import {  getFirestore, collection, setDoc, doc} from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAZaUrxPP46UWxvx93vKjDtPpee9htQgyA",
  authDomain: "chocomelt-51dda.firebaseapp.com",
  projectId: "chocomelt-51dda",
  storageBucket: "chocomelt-51dda.appspot.com",  
  messagingSenderId: "222655152425",
  appId: "1:222655152425:web:1e9572bafa996ab0b93738",
  measurementId: "G-RW93P36GFB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, getFirestore, collection, setDoc, doc };
