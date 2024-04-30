import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { IconEyeClosed, IconEye, IconLoader2 } from '@tabler/icons-react';

import Button from '~/components/Common/Button';
import Image from '~/components/Common/Image';
import FormControl from '~/components/Common/FormControl';
import images from '~/assets/images';
import styles from './ForgotPassword.module.scss';
import config from '~/config';
import Validator, { isRequired, isEmail } from '~/utils/validation';
import { toast } from 'react-toastify';
//Service
import { useDispatch, useSelector } from 'react-redux';
import { optEmailAsync, resetPasswordAsync } from '~/app/slices/userSlice';
import { selectUser } from '~/app/selectors';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const dispatch = useDispatch();
    const { email, loading } = useSelector(selectUser).data;

    useEffect(() => {
        Validator({
            form: '#form-2',
            formGroupSelector: '.form-group',
            errorSelector: '.form-message',
            rules: [isRequired('#email'), isEmail('#email'), isRequired('input[name="gender"]')],
            onSubmit(data) {
                const fetchApi = async () => {
                    try {
                        const result = await dispatch(optEmailAsync(data)).unwrap();
                        if (result) {
                            toast.success(result);
                        }
                    } catch (rejectedValueOrSerializedError) {
                        toast.error(rejectedValueOrSerializedError);
                    }
                };
                fetchApi();
            },
        });
    }, [dispatch]);

    return (
        <div className={cx('wrapper', 'hasBg')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('header')}>
                        <Button className={cx('logo-link')} to={config.routes.home}>
                            <Image className={cx('logo')} src={images.logo} alt="web khóa học" />
                        </Button>

                        <h1 className={cx('title')}>Lấy lại mật khẩu</h1>
                    </div>
                    <div className={cx('body')}>
                        <form
                            className={cx('formBody', {
                                form: true,
                            })}
                            id="form-2"
                        >
                            <FormControl
                                id="email"
                                labelTitle="Email của bạn"
                                placeholder="Địa chỉ email"
                                name="emailUser"
                                type="text"
                                showBack
                            />

                            <Button
                                className={email ? cx('btnSubmit') : cx('btnDisabled')}
                                disabled={email ? false : true}
                            >
                                {loading && <IconLoader2 className={cx('loading')} size={20} />}
                                &nbsp;Tiếp theo
                            </Button>
                        </form>

                        <div className={cx('NoAcc')}>
                            <p>Bạn chưa có tài khoản?</p>
                            <Button text to={config.routes.register}>
                                Đăng ký
                            </Button>
                        </div>
                    </div>
                    <div className={cx('footer')}>
                        Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với
                        <a href="http://localhost:3003/terms">Điều khoản sử dụng</a>
                        của chúng tôi.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
