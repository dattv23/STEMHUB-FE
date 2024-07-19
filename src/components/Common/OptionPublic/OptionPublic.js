import classNames from 'classnames/bind';
import { useState } from 'react';
import { Badge, Space } from 'antd';
import ModalChat from '~/components/Layouts/Components/ModalChat';
import { IconCircleChevronsUp, IconCircleChevronsDown, IconRobot, IconMessageChatbot } from '@tabler/icons-react';
import styles from './OptionPublic.module.scss';

const cx = classNames.bind(styles);

function OptionPublic() {
    const [show, setShow] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const handleShowModal = () => setIsOpen(!isOpen);

    return (
        <div className={cx('wrapper')}>
            <ModalChat setIsOpen={setIsOpen} isOpen={isOpen} />
            <Space className={cx('body')}>
                <div className={cx('options')}>
                    <Badge
                        className={cx('item')}
                        count={<IconMessageChatbot className={cx('message')} size={25} />}
                        offset={[2, -4]}
                    >
                        <IconRobot className={cx('icon-ai')} size={35} onClick={handleShowModal} />
                    </Badge>
                </div>
                {show ? (
                    <IconCircleChevronsDown className={cx('icon')} onClick={() => setShow(!show)} />
                ) : (
                    <IconCircleChevronsUp className={cx('icon')} onClick={() => setShow(!show)} />
                )}
            </Space>
        </div>
    );
}

export default OptionPublic;
