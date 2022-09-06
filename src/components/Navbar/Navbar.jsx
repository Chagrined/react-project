import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <li className={style.item}>
                <NavLink to='/' className={navData => navData.isActive ? style.active : ''} >profile</NavLink>
            </li>
            <li className={style.item} >
                <NavLink to='/dialogs' className={navData => navData.isActive ? style.active : ''}>message</NavLink>
            </li>
            <li>news</li>
            <li>music</li>
            <li>settings</li>
        </nav >
    )
}

export default Navbar;