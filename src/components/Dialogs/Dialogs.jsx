import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const state = [{ name: 'Vanya', id: 1 }, { name: 'Arsen', id: 2 }, { name: 'Dima', id: 3 }]

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
                {state.map(item => <Dialog name={item.name} id={item.id} />)}
            </div>
            <div className={style.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="what are you doing?" />
            </div>
        </div>
    )
}

export default Dialogs;