import { NavLink } from 'react-router-dom';
import style from '../Navbar.module.css'

const SideBar = (props) => {
    console.log(props.img)
    return (
        
            <div className={style.sideBarItem}>
                <img src={props.img} alt="avatar" />
                <div className={style.userName}>
                    <NavLink to={`/`}>{props.name}</NavLink>
                </div>
            </div>
        
    )
}

export default SideBar;