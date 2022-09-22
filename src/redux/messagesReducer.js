const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

const messageReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_MESSAGE:
            state.messagesText = action.textMessage;
            break;
        case ADD_MESSAGE:
            let message = {
                id: 4,
                message: state.messagesText
            }
            state.messagesState.push(message);
            state.messagesText = '';
            break;
    }
    return state;
}


export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const changeMessageActionCreator = (text) => ({ type: CHANGE_MESSAGE, textMessage: text });

export default messageReducer;