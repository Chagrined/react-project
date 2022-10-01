const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';

let initialState = {
    postsState: [
        { id: 1, message: 'I learn React', likeCount: 3 },
        { id: 2, message: 'Next i will learn Node.js', likeCount: 25 },
        { id: 3, message: 'Node.js it is platform for javascript', likeCount: 1000 },
        { id: 4, message: 'I like codding', likeCount: 4000 }
    ],
    postValue: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let valuePost = {
                id: 5,
                message: state.postValue,
                likeCount: 200
            }

            state.postsState.unshift(valuePost);
            state.postValue = '';
            return state;
        case CHANGE_POST:
            state.postValue = action.textPost;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostActionCreator = (text) => ({ type: CHANGE_POST, textPost: text });

export default profileReducer;