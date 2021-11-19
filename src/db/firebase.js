// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAH5vCDeq6XxNpcA_ZWzWUt5cBJIbBqhgw",
    authDomain: "elephant-app-13e2e.firebaseapp.com",
    projectId: "elephant-app-13e2e",
    storageBucket: "elephant-app-13e2e.appspot.com",
    messagingSenderId: "687537741831",
    appId: "1:687537741831:web:8aed3758af693604c10aa2",
    measurementId: "G-YP8N5VW614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;