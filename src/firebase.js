// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-dntH3pmDmfMGJM83pUUf8gSGaUcNJ9s",
  authDomain: "flutter-ecommer-app.firebaseapp.com",
  projectId: "flutter-ecommer-app",
  storageBucket: "flutter-ecommer-app.appspot.com",
  messagingSenderId: "92993752676",
  appId: "1:92993752676:web:9dbcf3e4d142f607ac1971",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


export default app;
