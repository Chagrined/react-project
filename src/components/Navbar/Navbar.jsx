import { Link } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <li><Link to='/' className={`${style.item} ${style.active}`} href="#">profile</Link></li>
            <li><Link to='/dialogs' className={style.item} >message</Link></li>
            <li><a className={style.item} >news</a></li>
            <li><a className={style.item} >music</a></li>
            <li><a className={style.item} >settings</a></li>
        </nav>
    )
}

export default Navbar;