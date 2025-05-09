// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-wVbb8BLqv8aCU2HFM34xCjx-te9SfQo",
  authDomain: "sh-tech-aa8b6.firebaseapp.com",
  projectId: "sh-tech-aa8b6",
  storageBucket: "sh-tech-aa8b6.firebasestorage.app",
  messagingSenderId: "346137351884",
  appId: "1:346137351884:web:a8d5b3caf616c1b3b51469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);