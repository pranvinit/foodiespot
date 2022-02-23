// firebase auth imports
import { authentication } from "../../utils/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = async ({ email, password }) => {
  return signInWithEmailAndPassword(authentication, email, password);
};
export const registerRequest = async ({ email, password }) => {
  return createUserWithEmailAndPassword(authentication, email, password);
};

export const logoutRequest = async () => {
  await signOut(authentication);
};
