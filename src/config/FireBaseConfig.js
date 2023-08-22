// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhaIt39DXx0PF0K4eHQb6lLD22iCRZ76c",
  authDomain: "react-native-auth-4f101.firebaseapp.com",
  projectId: "react-native-auth-4f101",
  storageBucket: "react-native-auth-4f101.appspot.com",
  messagingSenderId: "177697515717",
  appId: "1:177697515717:web:44fb6c35c5f4a342e868ac"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);