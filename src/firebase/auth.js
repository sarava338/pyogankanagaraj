import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const auth = getAuth();

export const signup = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {};
