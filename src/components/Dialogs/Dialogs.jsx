import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {props.dialogsPage.dialogsState.map(item => <Dialog name={item.name} id={item.id} img={item.img} />)}
            </div>
            <div className={style.messages}>
                {props.dialogsPage.messagesState.map((item, index) => <Message message={item.message} img={item.img} index={index}/>)}
            </div>
        </div>
    )
}

export default Dialogs;