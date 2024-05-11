// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOKy26uyVBeDy7qgaMKX-QhJTcNV-oKKA",
  authDomain: "quora-clone-f5433.firebaseapp.com",
  projectId: "quora-clone-f5433",
  storageBucket: "quora-clone-f5433.appspot.com",
  messagingSenderId: "778906813040",
  appId: "1:778906813040:web:e4dab03dc1c5621440eab5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// export const facebookProvider = new FacebookAuthProvider()
export const storage = getFirestore(app);
// export const facebookProvider = new FacebookAuthProvider();
