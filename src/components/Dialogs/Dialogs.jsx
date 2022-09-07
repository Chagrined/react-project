import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const dialogState = [{ name: 'Vanya', id: 1 }, { name: 'Arsen', id: 2 }, { name: 'Dima', id: 3 }];
const messagesState = [
    { message: "Hi", id: 1 },
    { message: "How are you?", id: 2 },
    { message: "what are you doing?", id: 3 },
]

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? style.active : ''}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.messageItem}>{props.message}</div>)
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogState.map(item => <Dialog name={item.name} id={item.id} />)}
            </div>
            <div className={style.messages}>
               {messagesState.map(item => <Message message={item.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;