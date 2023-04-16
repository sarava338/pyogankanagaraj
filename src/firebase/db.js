import { getDocs } from "firebase/firestore";

export const getPosts = async (collectionRef) => {
  return await getDocs(collectionRef);
};


