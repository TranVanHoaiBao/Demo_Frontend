import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import logo from '~/assets/img/logo.png';
import bag from '~/assets/img/icon/bag.png'
import man from '~/assets/img/icon/man.png'
import search from '~/assets/img/icon/search.png'


const cx = classNames.bind(styles)
function Header() {
    return (
        <header className={cx('header-section')}>
            <div className={cx('container')}>
                <div className={cx('inner-header')}>
                    <div className={cx('logo')}>
                        <a href="">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <nav className={cx('main-menu')}>
                        <ul>
                            <li><a href=""> Home</a></li>
                            <li><a href=""> Shop</a></li>
                            <li><a href=""> About</a></li>
                            <li><a href=""> Blog</a></li>
                            <li><a href=""> Contact</a></li>
                        </ul>
                    </nav>
                    <div className={cx('user-access')}>
                        <a href="">Register</a>
                        <a href="" className={cx('in')}>Sign in</a>
                    </div>
                    <div className={cx('header-right')}>
                        <img src={search} alt="" />
                        <img src={man} alt="" />
                        <a href="">
                            <img src={bag} alt="" />
                        </a>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;