
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore' 


const firebaseConfig = {
  apiKey: "AIzaSyCJKFXR6SIEmsyLUInZCuyWcmdcKe71WoY",
  authDomain: "ecommerce-cartagena.firebaseapp.com",
  projectId: "ecommerce-cartagena",
  storageBucket: "ecommerce-cartagena.appspot.com",
  messagingSenderId: "267798615323",
  appId: "1:267798615323:web:216df3d8b9ae731fb9afbe"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)