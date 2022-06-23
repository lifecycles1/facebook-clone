import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import Post from "./Post";

function Posts() {
  const [realtimePosts, setRealtimePosts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "posts");

    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setRealtimePosts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().toLocaleString(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      {realtimePosts?.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          message={post.message}
          email={post.email}
          timestamp={post.timestamp}
          image={post.image}
          postImage={post.postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
