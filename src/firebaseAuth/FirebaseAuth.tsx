import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC0zHFbZ2Vee4RcGM_zMHe-oM72TTCymk",
  authDomain: "to-do-sentinel.firebaseapp.com",
  projectId: "to-do-sentinel",
  storageBucket: "to-do-sentinel.appspot.com",
  messagingSenderId: "874156077996",
  appId: "1:874156077996:web:a6b7f2689412a19d3f0009",
  measurementId: "G-S249DBWP5E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
