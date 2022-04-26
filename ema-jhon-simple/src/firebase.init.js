// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMmxp6WPpYB8jm_cUxSCKPj5_QQ61CpG4",
  authDomain: "emma-jhon-simple-3a74f.firebaseapp.com",
  projectId: "emma-jhon-simple-3a74f",
  storageBucket: "emma-jhon-simple-3a74f.appspot.com",
  messagingSenderId: "148199880007",
  appId: "1:148199880007:web:92a829826a1f3d643dc862",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
