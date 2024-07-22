import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { memo } from 'react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import styles from './Topic.module.scss';
import Heading from '~/components/Common/Heading';
import Button from '~/components/Common/Button';
import { encodeImageUrl } from '~/utils/stringHelpers';

const cx = classNames.bind(styles);

function Topic({ colorCode, shine }) {
    const { topicImage, topicName, view, topicId } = shine;

    const encodedImageUrl = encodeImageUrl(topicImage);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('images')} style={{ backgroundImage: `url(${encodedImageUrl})` }} />
            <div className={cx('content')}>
                <Heading className={cx('name')} h4>
                    {topicName}
                </Heading>
                <div className={cx('group-action')}>
                    <div className={cx('video-number')}>
                        <div className={cx('wrapper-icon')} style={{ backgroundColor: colorCode }}>
                            <IconPlayerPlayFilled size={12} className={cx('play-icon')} />
                        </div>
                        <span className={cx('title')}>
                            <p>{view}</p> Lượt xem
                        </span>
                    </div>
                    <Button
                        mainColor
                        small
                        style={{ backgroundColor: colorCode, borderColor: colorCode }}
                        to={`/topic/${topicId}`}
                    >
                        Tham gia
                    </Button>
                </div>
            </div>
        </div>
    );
}

Topic.propTypes = {
    colorCode: PropTypes.string.isRequired,
    shine: PropTypes.shape({
        topicImage: PropTypes.string,
        topicName: PropTypes.string.isRequired,
        view: PropTypes.number.isRequired,
        topicId: PropTypes.string.isRequired,
    }).isRequired,
};

export default memo(Topic);
