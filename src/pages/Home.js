import React from 'react';
import AddCategory from './Category/AddCategory';
import ListCategory from './Category/ListCategory';
import AddPosts from './Posts/AddPosts';
import ListPosts from './Posts/ListPosts';

const Home = () => {
    return (
        <div>
            <AddCategory />
            <ListCategory />
            <AddPosts />
            <ListPosts />
        </div>
    );
};

export default Home;