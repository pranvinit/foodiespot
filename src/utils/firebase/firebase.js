// firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "don't steal my api key please lol",
  authDomain: "yourmom.app",
  projectId: "urmom-2766d",
  storageBucket: "urmom-69420.app.com",
  messagingSenderId: "nah",
  appId: "1:urmom:web:notfound",
};

initializeApp(firebaseConfig);

export const authentication = getAuth();
