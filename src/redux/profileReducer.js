const ADD_POST = 'ADD-POST';
const CHANGE_POST = 'CHANGE-POST';



const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let valuePost = {
                id: 5,
                message: state.postValue,
                likeCount: 200
            }

            state.postsState.unshift(valuePost);
            state.postValue = '';
            break;
        case CHANGE_POST:
            state.postValue = action.textPost;
            break;
    }
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changePostActionCreator = (text) => ({ type: CHANGE_POST, textPost: text });

export default profileReducer;