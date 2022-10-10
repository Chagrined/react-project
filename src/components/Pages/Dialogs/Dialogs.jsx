import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
    const onChangeMessage = (event) => {
        let messageText = event.target.value;
        props.ChangeMessage(messageText)
    }

    const onAddMessageText = () => {
        props.AddMessageText()
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {props.dialogsState.map(item => <Dialog name={item.name} id={item.id} img={item.img} />)}
            </div>
            <div className={style.messages}>
                {props.messagesState.map((item, index) => <Message message={item.message} img={item.img} index={index} />)}
                <textarea value={props.messagesText} onChange={onChangeMessage} />
                <div>
                    <button onClick={onAddMessageText}>addMessage</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;