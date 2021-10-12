import { db } from "../config/firebase.config";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";

export const getPosts = async () => {
  const citiesRef = collection(db, "posts");

  const q = await getDocs(query(citiesRef, orderBy("title"), limit(3)));

  const posts = q.docs.map((doc) => {
    return doc.data() as any;
  });

  return posts;
};
