import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss'
import Header from '../components/Header'

const cx = classNames.bind(styles)
function DefaultLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <Header />
        </div>
     );
}

export default DefaultLayout;