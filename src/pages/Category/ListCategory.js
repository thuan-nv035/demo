import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const ListCategory = () => {
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
  const deleteCategory = async(id) => {
    const docRef = doc(db, "category", id);
    await deleteDoc(docRef);
  };
  return (
    <div>
      <ul>
        {categories?.map((item, index) => {
          return (
            <div key={index}>
              <h1>danh muc: {item.category}</h1>
              <button type="button" onClick={() => deleteCategory(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ListCategory;
