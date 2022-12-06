// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCSbkkL1gKzDTvHrv7ksHzoKe9ZpRXTiTA",
    authDomain: "auth-40dde.firebaseapp.com",
    projectId: "auth-40dde",
    storageBucket: "auth-40dde.appspot.com",
    messagingSenderId: "609936457907",
    appId: "1:609936457907:web:fd323462bb5f923ae970c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
