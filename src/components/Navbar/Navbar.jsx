import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <li><a className={`${style.item} ${style.active}`} href="#">profile</a></li>
            <li><a className={style.item} href="#">message</a></li>
            <li><a className={style.item} href="#">news</a></li>
            <li><a className={style.item} href="#">music</a></li>
            <li><a className={style.item} href="#">settings</a></li>
      </nav>
    )
}

export default Navbar;