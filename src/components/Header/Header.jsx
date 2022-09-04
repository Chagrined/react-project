import logo from '../../images/logo.png';
import style from './Header.module.css';

const Header = () => {
    return(
        <header className={style.header}>
            <img alt='logo' src={logo} width={50} height={50} />
        </header>
    )
}

export default Header;