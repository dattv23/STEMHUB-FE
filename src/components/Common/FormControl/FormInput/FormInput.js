import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';

const cx = classNames.bind(styles);

function FormInput({ ...props }) {
    const {
        labelStyle,
        placeholder,
        value,
        name,
        type,
        setCurrentLogin,
        labelTitle,
        labelComeback,
        setUserName_L,
        setPassword_L,
    } = props;

    const classes = cx('labelGroup', {
        labelStyle,
    });

    const classComeback = cx('label', 'right', {
        labelComeback,
    });

    return (
        <div className={cx('wrapper')}>
            <div className={classes}>
                <label className={cx('label')}>{labelTitle}</label>
                <label
                    className={classComeback}
                    onClick={() => {
                        setCurrentLogin(true);
                    }}
                >
                    Quay lại
                </label>
            </div>
            <div className={cx('inputWrap')}>
                <input
                    value={value}
                    onChange={(e) => {
                        if (name === 'Username_login') {
                            setUserName_L(e.target.value);
                        } else if (name === 'password_login') {
                            setPassword_L(e.target.value);
                        }
                    }}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    maxLength={40}
                />
            </div>
        </div>
    );
}

export default FormInput;