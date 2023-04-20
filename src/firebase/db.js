import { addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./fireebase";

export const get = async (collectionRef) => {
  return await getDocs(collectionRef);
};

export const add = async (collectionRef, newPost) => {
  return await addDoc(collectionRef, newPost);
};

export const update = async (id, newPost) => {
  const docObj = doc(db, newPost.collection, id);
  return await updateDoc(docObj, newPost);
};

export const remove = async (id, collection) => {
  const docObj = doc(db, collection, id);
  return await deleteDoc(docObj);
};