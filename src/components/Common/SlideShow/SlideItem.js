import classNames from 'classnames/bind';
import { memo, useMemo } from 'react';
import Image from '~/components/Common/Image';
import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

const SlideItem = memo(({ barber, index }) => {
    const slideClass = useMemo(() => cx('wrapper', `slide-item-${index + 1}`), [index]);

    return (
        <div className={slideClass}>
            <div className={cx('left')}>
                <h2 className={cx('heading')}>{barber.title}</h2>
                <p className={cx('desc')}>{barber.content}</p>
            </div>
            <div className={cx('right')}>
                <Image
                    src={barber.image}
                    alt={barber.title}
                    className={cx('image')}
                    loading="lazy"
                />
            </div>
        </div>
    );
});

export default SlideItem;
