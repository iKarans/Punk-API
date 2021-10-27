// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIreADD8GrZhScI25wQtgOV6jR23VFl-Q",
    authDomain: "punk-api-aaea6.firebaseapp.com",
    projectId: "punk-api-aaea6",
    storageBucket: "punk-api-aaea6.appspot.com",
    messagingSenderId: "859169011154",
    appId: "1:859169011154:web:cb3f2ad260a906633c840b",
    measurementId: "G-GX01D2JDL1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider();


export const auth = getAuth();
// signInWithRedirect(auth, provider);

export const db = getFirestore();