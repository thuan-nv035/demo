import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const ListPosts = () => {
  const [posts, setPosts] = useState([]);
  let unsub = null;
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "posts");
      unsub = onSnapshot(collectionRef, (snapshot) => {
        const localPosts = [];
        snapshot.forEach((doc) => {
          localPosts.push({
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            categoryId: doc.data().categoryId
          });
        });
        setPosts(localPosts);
      });
    })();
  }, []);

  const deletePost = async (id) => {
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
  }
  return (
    <div>
      <ul>
        {posts.map((post, index) => {
          return (
            <>
              <li key={index}>
                <h1>title: {post.title}</h1>
                <h1>content: {post.content}</h1>
                <h1>category: {post.categoryId}</h1>
                <button type="button" onClick={() => deletePost(post.id)}>Delete</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ListPosts;
