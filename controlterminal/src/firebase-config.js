import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: proccess.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: proccess.env.REACT_APP_FIREBASE_authDomain,
  projectId: proccess.env.REACT_APP_FIREBASE_projectId,
  storageBucket: proccess.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: proccess.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: proccess.env.REACT_APP_FIREBASE_appId,
  measurementId: proccess.env.REACT_APP_FIREBASE_measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);