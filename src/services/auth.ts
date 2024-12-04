import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { auth } from './firebase';

export const createAccountFirebase = async (
  email: string,
  password: string
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error registering user: ', error);
  }
};

export const loginFirebase = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error logging user: ', error);
  }
};

type AuthStateChangeCallback = (user: User | null) => void;

export const observeAuthState = (callback: AuthStateChangeCallback) => {
  return onAuthStateChanged(auth, callback);
};
