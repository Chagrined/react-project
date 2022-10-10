import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {
    let changePost = (e) => {
        let value = e.target.value;
        props.onChangePost(value)
    }

    let addPost = () => {
        props.onAddPost()
    }


    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={changePost} value={props.postValue} />
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div>
                {props.post.map(item => <Post likeCount={item.likeCount} message={item.message} />)}
            </div>
        </div>
    )
}

export default MyPosts;