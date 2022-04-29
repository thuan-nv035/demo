import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";

const Content = () => {
  const [categories, setCategories] = useState([]);
  let unsub = null;
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "category");
      unsub = onSnapshot(collectionRef, (snapShot) => {
        const localCategory = [];
        snapShot.forEach((doc) => {
          localCategory.push({
            id: doc.id,
            category: doc.data().category,
          });
        });
        setCategories(localCategory);
      });
    })();
  }, []);
  return (
    <div>
      <ul>
      <h1>Danh muc tin tuc</h1>
        {categories?.map((item, index) => { 
          return (
            <div className = "cursor-pointer" key={index}>
              <h1>{item.category}</h1>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Content;
