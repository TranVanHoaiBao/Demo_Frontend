import classNames from "classnames/bind";

import styles from './Slider.module.scss'
import intro from '~/assets/video/intro/intro.mp4'

const cx = classNames.bind(styles)
function Slider() {
    return (
        <div className={cx('wrapper')}>
            <video className={cx('intro')} src={intro} autoPlay loop muted></video>
            <div className={cx('content')}></div>
        </div>
    );
}

export default Slider;