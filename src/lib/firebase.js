// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const database = firebase.database();
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
