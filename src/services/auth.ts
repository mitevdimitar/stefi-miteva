import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebase';

export const createAccountFirebase = async (
  email: string,
  password: string
) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);

    console.log({ result });
  } catch (error) {
    console.error('Error registering user: ', error);
  }
};

export const loginFirebase = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);

    console.log({ result });
  } catch (error) {
    console.error('Error logging user: ', error);
  }
};
