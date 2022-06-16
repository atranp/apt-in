import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC1tXKNgX3plMRK1tzqJxJy3xz5EqFw_po",
    authDomain: "linkedin-clone-ec1a5.firebaseapp.com",
    projectId: "linkedin-clone-ec1a5",
    storageBucket: "linkedin-clone-ec1a5.appspot.com",
    messagingSenderId: "591338596271",
    appId: "1:591338596271:web:e2aba6e4571b5d2264f15a"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth();

  const colRef = collection(db, "posts");

  // queries
  const colQuery = query(colRef, orderBy('timestamp', 'desc'));

  export { db, auth, colRef, colQuery };