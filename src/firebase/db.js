import { addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./fireebase";

export const getPosts = async (collectionRef) => {
  return await getDocs(collectionRef);
};

export const createPost = async (collectionRef, newPost) => {
    return await addDoc(collectionRef, newPost);
};

export const updatePost = async (id, newPost) => {
  const docObj = doc(db, newPost.collection, id)
  return await updateDoc(docObj, newPost)
}

export const deletePost = async (id, collection) => {
  const docObj = doc(db, collection, id)
  return await deleteDoc(docObj)
}