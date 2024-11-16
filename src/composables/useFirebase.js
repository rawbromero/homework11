// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNnBNUUCbUDPgAbGec31C6MG8s1h8Jr2I",
  authDomain: "company-directory-2.firebaseapp.com",
  projectId: "company-directory-2",
  storageBucket: "company-directory-2.appspot.com",
  messagingSenderId: "1005119120189",
  appId: "1:1005119120189:web:62f9a510cd70878d495b54",
  measurementId: "G-4KNTLRHWNK"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);