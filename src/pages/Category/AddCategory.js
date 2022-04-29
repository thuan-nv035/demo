import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import { db } from '../../firebase';

const AddCategory = () => {
    const [category, setCategory] = useState('')

    const handleSubmit = async () => {
        if (!category) {
            alert("chua co danh muc");
          }
          const collectionRef = collection(db, "category");
          await addDoc(collectionRef, {
            category: category,
          });
          setCategory("");
          console.log(db);
    }

    return (
        <div>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Add Category</h1>
            <div className=" mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="title"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
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

export default AddCategory;