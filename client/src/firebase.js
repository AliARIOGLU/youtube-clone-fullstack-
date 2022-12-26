import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOg8Z6nhXt40aC6HmcaBwOTkobOZunHPs",
  authDomain: "clone-524e7.firebaseapp.com",
  projectId: "clone-524e7",
  storageBucket: "clone-524e7.appspot.com",
  messagingSenderId: "66349927660",
  appId: "1:66349927660:web:6518d8de93e0805c8129c9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
