import {
  addDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const AddPosts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [listCategory, setListCategory] = useState([]);
  const [categoryId,setCategoryId] = useState('')
  const handleSubmit = async () => {
    if (!title) {
      alert("chua co title");
    }
    if (!content) {
      alert("chua co content");
    }
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, {
      title: title,
      content: content,
      categoryId: categoryId
    });
    setTitle("");
    setContent("");
  };

  let unsub = null
  useEffect(() => {
    (async () => {
      const collectionRef = collection(db, "category");
      unsub = onSnapshot(collectionRef, (snapShot) => {
        const localCategory = [];
        snapShot.forEach((doc) => {
          localCategory.push({
            id: doc.id,
            category: doc.data().category,
            categoryId: doc.data().categoryId
          });
        });
        setListCategory(localCategory);
      });
    })();
  }, []);
  return (
    <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Add posts</h1>
            <div className=" mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <select name="cars" id="cars" onChange={(e) => setCategoryId(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker">
                {listCategory?.map((listCategoryItem, listCategoryIndex) => {
                  return (
                    <option
                      key={listCategoryIndex}
                      value={listCategoryItem.category}
                      onChange={(e) => {
                        setCategoryId(e.target.value);
                      }}
                    >
                      {listCategoryItem.category}
                    </option>
                  );
                })}
              </select>
              <button
                className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosts;
