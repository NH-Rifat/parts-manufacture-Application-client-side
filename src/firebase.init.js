// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCFsBRWbKImU77WeK2Cv-l_0oCRJvAfOE",
  authDomain: "car-manufacturing-e90c4.firebaseapp.com",
  projectId: "car-manufacturing-e90c4",
  storageBucket: "car-manufacturing-e90c4.appspot.com",
  messagingSenderId: "353939836181",
  appId: "1:353939836181:web:4c033259dcc80cbdd72d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;