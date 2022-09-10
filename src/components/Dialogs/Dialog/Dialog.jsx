import { NavLink } from 'react-router-dom';
import style from '../Dialogs.module.css';

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog}>
            <img src={props.img} alt="avatar" />
            <NavLink to={path} className={navData => navData.isActive ? style.active : ''}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;