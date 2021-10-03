import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "invoice-app-8c4fb.firebaseapp.com",
  projectId: "invoice-app-8c4fb",
  storageBucket: "invoice-app-8c4fb.appspot.com",
  messagingSenderId: "252242666918",
  appId: "1:252242666918:web:ed4e47c083efda9d631b67",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
