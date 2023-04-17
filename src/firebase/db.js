import { addDoc, getDocs } from "firebase/firestore";

export const getPosts = async (collectionRef) => {
  return await getDocs(collectionRef);
};

export const createPost = async (collectionRef, newPost) => {
  await addDoc(collectionRef, newPost);
};
