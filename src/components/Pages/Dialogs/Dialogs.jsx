import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    const messageAreaText = React.useRef();

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {props.dialogsPage.dialogsState.map(item => <Dialog name={item.name} id={item.id} img={item.img} />)}
            </div>
            <div className={style.messages}>
                {props.dialogsPage.messagesState.map((item, index) => <Message message={item.message} img={item.img} index={index} />)}
                <textarea ref={messageAreaText} />
                <div>
                    <button onClick={() => {
                        let messageValue = messageAreaText.current.value;
                        alert(messageValue)
                    }}>addMessage</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;