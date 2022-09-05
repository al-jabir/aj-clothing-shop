import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6T4CmSA0_nwa0ulekVdOqsPsGs5q4ito",
  authDomain: "aj-clothing-shop.firebaseapp.com",
  projectId: "aj-clothing-shop",
  storageBucket: "aj-clothing-shop.appspot.com",
  messagingSenderId: "144779612794",
  appId: "1:144779612794:web:ff7d68352e9644b00b61c3",
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
