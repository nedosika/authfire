import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjcrYE3YIhgTdQfGUsa0965qu8r_R75dU",
    authDomain: "authentication-f3960.firebaseapp.com",
    projectId: "authentication-f3960",
    storageBucket: "authentication-f3960.appspot.com",
    messagingSenderId: "158624910216",
    appId: "1:158624910216:web:dd65d04fb2dcbc1aa2483d",
    measurementId: "G-RVHG4081CD"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;