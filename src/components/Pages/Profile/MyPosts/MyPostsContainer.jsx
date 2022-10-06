import React from 'react';
import { changePostActionCreator, addPostActionCreator } from '../../../../redux/profileReducer'
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

    let onChangePost = (e) => {
        let postTextChange = e.target.value;
        props.dispatch(changePostActionCreator(postTextChange));
    }

    let onAddPost = () => {
        props.dispatch(addPostActionCreator())
    }

    return (
        <MyPosts onChangePost={onChangePost} onAddPost={onAddPost} post={props.store.getState().profilePage.postsState} postValue={props.store.getState().profilePage.postValue} />
    )
}

export default MyPostsContainer;