import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {props.dialog.map(item => <Dialog name={item.name} id={item.id} />)}
            </div>
            <div className={style.messages}>
               {props.message.map(item => <Message message={item.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;