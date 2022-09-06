import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog}>
                    <NavLink to="1" className={navData => navData.isActive ? style.active : ''}>Arsen</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="1" className={navData => navData.isActive ? style.active : ''}>Dima</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="1" className={navData => navData.isActive ? style.active : ''}>Vanya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="1" className={navData => navData.isActive ? style.active : ''}>Petro</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="1" className={navData => navData.isActive ? style.active : ''}>Tanya</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.messageItem}>Hi</div>
                <div className={style.messageItem}>How are you?</div>
                <div className={style.messageItem}>what are you doing?</div>
            </div>
        </div>
    )
}

export default Dialogs;