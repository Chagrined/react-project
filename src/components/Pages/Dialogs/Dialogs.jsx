import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, changeMessageActionCreator } from '../../../redux/messagesReducer';


const Dialogs = (props) => {
    

    const onChangeMessage = (event) => {
        let messageText = event.target.value;
        props.dispatch(changeMessageActionCreator(messageText))
    }
    const onAddMessageText = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {props.dialogsPage.dialogsState.map(item => <Dialog name={item.name} id={item.id} img={item.img} />)}
            </div>
            <div className={style.messages}>
                {props.dialogsPage.messagesState.map((item, index) => <Message message={item.message} img={item.img} index={index} />)}
                <textarea   value={props.dialogsPage.messagesText} onChange={onChangeMessage}/>
                <div>
                    <button onClick={onAddMessageText}>addMessage</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;