import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY, 
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseUrl:process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket:process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId:process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId:process.env.REACT_APP_FIREBASE_APIID,
  measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
