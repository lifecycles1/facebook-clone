import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7JjzWgHWrN0HBrgygXbo2AhdLLmDiwTk",
  authDomain: "fb-clone-335815.firebaseapp.com",
  projectId: "fb-clone-335815",
  storageBucket: "fb-clone-335815.appspot.com",
  messagingSenderId: "168939937352",
  appId: "1:168939937352:web:5a80b859a8e8af8059c27d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage(app);

export { db, storage };
