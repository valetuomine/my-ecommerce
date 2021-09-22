import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyCkOsXhU1P2RrXz8dUDT4ekeh8LnrldzI4",
    authDomain: "my-ecommerce-83c55.firebaseapp.com",
    projectId: "my-ecommerce-83c55",
    storageBucket: "my-ecommerce-83c55.appspot.com",
    messagingSenderId: "218944139204",
    appId: "1:218944139204:web:bea121228dc3639e59fe91",
    measurementId: "G-CH6VE2RR8V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
