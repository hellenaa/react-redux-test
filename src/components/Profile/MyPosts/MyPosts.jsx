import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
            <div>
                <Post message={'Hi, how are you'} likesCount={5}/>
                <Post message={'It\'s my first post'} likesCount={0}/>
            </div>
        </div>
    );
};

export default MyPosts;