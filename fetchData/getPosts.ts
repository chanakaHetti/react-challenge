import { db } from "../config/firebase.config";
import { collection, getDocs, limit, orderBy, query, startAfter } from "firebase/firestore";
import { PostType } from "../types/post";

let latestDoc: any = null;

export const getPosts = async () => {
  const citiesRef = collection(db, "posts");

  // const q = await getDocs(query(citiesRef, orderBy("title")));
  const q = await getDocs(query(citiesRef, orderBy("title"), startAfter(latestDoc || 0), limit(3)));

  const posts = q.docs.map((doc) => {
    return doc.data() as PostType;
  });

  latestDoc = q.docs[q.docs.length - 1];

  console.log('adoooo', posts)

  return posts;
};

// export const getPosts = async () => {
//   const citiesRef = collection(db, "posts");

//   const q = await getDocs(query(citiesRef, orderBy("title"), limit(3)));

//   const snapshot = await q.docs;

//   const last = snapshot[snapshot.length - 1];

//   const aa = await getDocs(query(citiesRef, orderBy("title"), startAfter(last.data()), limit(2)));

//   const restPost = aa.docs.map(doc => {
//     return doc.data() as PostType
//   })

//   const posts = q.docs.map((doc) => {
//     return doc.data() as PostType;
//   });

//   return posts;
// };
