import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh1a1F63blgEPrr-_On73FMLTcw7l-qWQ",
  authDomain: "blog-app-3d806.firebaseapp.com",
  projectId: "blog-app-3d806",
  storageBucket: "blog-app-3d806.appspot.com",
  messagingSenderId: "990415396201",
  appId: "1:990415396201:web:2adfd4c7bb0f0fb1b871f8",
};

if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export { db };
