// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvdQNpB8Ijr8VCy2H4A4JQerCJBHyCUzE",
    authDomain: "linkedin-clone-2e9bc.firebaseapp.com",
    projectId: "linkedin-clone-2e9bc",
    storageBucket: "linkedin-clone-2e9bc.appspot.com",
    messagingSenderId: "810026486962",
    appId: "1:810026486962:web:3ff7385c57406cfad88dab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db,auth}