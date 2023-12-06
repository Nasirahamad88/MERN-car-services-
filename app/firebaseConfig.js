
import { initializeApp } from "firebase/app";
require('dotenv').config()


const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,

   apiKey: "AIzaSyBaEtTXApcLLeZ3I47gW7TQNMim8U4CB-A",
  authDomain: "car-services-6d0a5.firebaseapp.com",
  projectId: "car-services-6d0a5",
  storageBucket: "car-services-6d0a5.appspot.com",
  messagingSenderId: "247413836054",
  appId: "1:247413836054:web:ebbb2aa55ae9188e582837"
};



const app = initializeApp(firebaseConfig);
export default app;