import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { IconCircleCheckFilled, IconCircleCaretRight } from '@tabler/icons-react';

import styles from './TrackItem.module.scss';

const cx = classNames.bind(styles);

function TrackItem({ data, index, topicParameter, isActive, onClose }) {
    const { lessonId, lessonName } = data;

    const handleClick = () => {
        if (onClose) {
            onClose();
        }
    };

    return (
        <>
            <div className={cx('wrapper', { active: isActive })}>
                <Link
                    className={cx('info')}
                    to={`/topic/${topicParameter}/${lessonName}=${lessonId}`}
                    onClick={handleClick}
                >
                    <h3 className={cx('title')}>
                        {`${index + 1}. `}
                        {lessonName}
                    </h3>
                    <p>
                        <IconCircleCaretRight size={18} className={cx('icon-play')} />
                    </p>
                </Link>
                <div className={cx('icon-box')}>
                    <IconCircleCheckFilled size={20} />
                </div>
            </div>
        </>
    );
}

TrackItem.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number,
    topicParameter: PropTypes.string,
    isActive: PropTypes.bool,
    onClose: PropTypes.func,
};

export default TrackItem;
