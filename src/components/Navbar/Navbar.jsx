import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'
import SideBar from './SideBar/SideBar';

const Navbar = (props) => {


    return (
        <nav className={style.nav}>
            <li className={style.item}>
                <NavLink to='/' className={navData => navData.isActive ? style.active : ''} >profile</NavLink>
            </li>
            <li className={style.item} >
                <NavLink to='/dialogs' className={navData => navData.isActive ? style.active : ''}>message</NavLink>
            </li>
            <li className={style.item}>
                <NavLink to={'/news'} className={data => data.isActive ? style.active : ''}>news</NavLink>
            </li>
            <li className={style.item}>
                <NavLink to={'/music'} className={data => data.isActive ? style.active : ''}>music</NavLink>
            </li>
            <li className={style.item}>
                <NavLink to={'/settings'} className={data => data.isActive ? style.active : ''}>settings</NavLink>
            </li>
            <div className={style.sideBar}>
                {props.sideBar.map(item => <SideBar name={item.name} img={item.img} id={item.id} />)}
            </div>
        </nav >
    )
}

export default Navbar;