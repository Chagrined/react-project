import React from 'react';
import { connect } from 'react-redux';
import { changePostActionCreator, addPostActionCreator } from '../../../../redux/profileReducer'
import MyPosts from './MyPosts';



// const MyPostsContainer = (props) => {

//     let onChangePost = (e) => {
//         let postTextChange = e.target.value;
//         props.dispatch(changePostActionCreator(postTextChange));
//     }

//     let onAddPost = () => {
//         props.dispatch(addPostActionCreator())
//     }

//     return (
//         <MyPosts onChangePost={onChangePost} onAddPost={onAddPost} post={props.store.getState().profilePage.postsState} postValue={props.store.getState().profilePage.postValue} />
//     )
// }

const mapStateToProps = (state) => {
    return {
        post: state.profilePage.postsState,
        postValue: state.profilePage.postValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangePost: (postTextChange) => {
            dispatch(changePostActionCreator(postTextChange));
        },
        onAddPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;