// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ-ovUGiZFQyIi0e_laZzI-lToVpcmL1s",
  authDomain: "coffee-store-8ddda.firebaseapp.com",
  projectId: "coffee-store-8ddda",
  storageBucket: "coffee-store-8ddda.firebasestorage.app",
  messagingSenderId: "11050941246",
  appId: "1:11050941246:web:68297f97625d3ddce04a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
