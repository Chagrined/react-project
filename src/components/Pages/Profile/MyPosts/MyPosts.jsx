import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {changePostActionCreator, addPostActionCreator} from '../../../../redux/profileReducer'



const MyPosts = (props) => {

    

    let OnChangePost = (e) => {
        let postTextChange = e.target.value;
        props.dispatch(changePostActionCreator(postTextChange));
    }

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea  onChange={OnChangePost} value={props.profilePage.postValue}/>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div>
                {props.profilePage.postsState.map(item => <Post likeCount={item.likeCount} message={item.message} />)}
            </div>
        </div>
    )
}

export default MyPosts;