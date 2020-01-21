import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

firebase.initializeApp({
    apiKey: "AIzaSyBemL4d9kJeDP3hqv2zc1pIa1JvtEyXLmY",
    authDomain: "social-network-papitas.firebaseapp.com",
    projectId: "social-network-papitas",
    storageBucket: "social-network-papitas.appspot.com",
    messagingSenderId: "929188643819",
    appId: "1:929188643819:web:096656a9296d63cb8a8fae",
})

export const auth = firebase.auth();
export const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true,
})