// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyARcEKgAEM6FGg38rPx49nnCl7_eprZKyI",
  authDomain: "sema-eda10.firebaseapp.com",
  projectId: "sema-eda10",
  storageBucket: "sema-eda10.appspot.com",
  messagingSenderId: "486618157377",
  appId: "1:486618157377:web:47912b8199d68aecf7d1c0",
  measurementId: "G-466GLJRXXD"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
