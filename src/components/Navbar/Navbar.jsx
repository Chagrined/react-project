import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <a href="#"><li>profile</li></a>
            <a href="#"><li>message</li></a>
            <a href="#"><li>news</li></a>
            <a href="#"><li>music</li></a>
            <a href="#"><li>settings</li></a>
      </nav>
    )
}

export default Navbar;