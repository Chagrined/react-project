const CHANGE_MESSAGE = 'CHANGE-MESSAGE';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState =  {
    messagesState: [
        { message: "Hi", id: 1, img: 'https://cdn-icons-png.flaticon.com/512/149/149452.png' },
        { message: "How are you?", id: 2, img: 'https://cdn-icons-png.flaticon.com/512/149/149995.png' },
        { message: "what are you doing?", id: 3 },
    ],
    messagesText: '',
    dialogsState: [
        { name: 'Vanya', id: 1, img: 'https://cdn-icons-png.flaticon.com/512/149/149452.png' },
        { name: 'Arsen', id: 2, img: 'https://cdn-icons-png.flaticon.com/512/149/149995.png' },
        { name: 'Dima', id: 3, img: 'https://cdn-icons-png.flaticon.com/512/3843/3843912.png' }
    ]
}

const messageReducer = (state = initialState, action) => {
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