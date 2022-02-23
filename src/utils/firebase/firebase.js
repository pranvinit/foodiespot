// firebase imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6E3FyKrj1n7Xfb37tfh3cUGNDqKiVtuo",
  authDomain: "foodiespot-2766d.firebaseapp.com",
  projectId: "foodiespot-2766d",
  storageBucket: "foodiespot-2766d.appspot.com",
  messagingSenderId: "23175827044",
  appId: "1:23175827044:web:e4008a9d5b243d5e691971",
};

initializeApp(firebaseConfig);

export const authentication = getAuth();
