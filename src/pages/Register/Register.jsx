import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useAuthStore from '../../store/authStore';
import styles from './Register.module.css';

const Register = () => {
    const navigate = useNavigate();
    const register = useAuthStore((state) => state.register);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Заполните все обязательные поля');
            return false;
        }

        if (formData.name.length < 2) {
            setError('Имя должно содержать минимум 2 символа');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Введите корректный email');
            return false;
        }

        if (formData.phone && !/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
            setError('Введите корректный номер телефона');
            return false;
        }

        if (formData.password.length < 6) {
            setError('Пароль должен содержать минимум 6 символов');
            return false;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Пароли не совпадают');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const success = register({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password
        });

        if (success) {
            navigate('/');
        } else {
            setError('Пользователь с таким email уже существует');
        }
    };

    return (
        <div className={styles.register_page}>
            <div className="container">
                <div className={styles.register_container}>
                    <div className={styles.register_card}>
                        <div className={styles.logo}>
                            <span>БЕЗОПАСНЫЙ ДОМ</span>
                        </div>

                        <h1 className={styles.title}>Создать аккаунт</h1>
                        <p className={styles.subtitle}>Зарегистрируйтесь для доступа к заказам</p>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.input_group}>
                                <label htmlFor="name">
                                    Имя <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Иван Иванов"
                                />
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="email">
                                    Email <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.com"
                                />
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="phone">
                                    Телефон <span className={styles.optional}>(опционально)</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+7 (999) 123-45-67"
                                />
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="password">
                                    Пароль <span className={styles.required}>*</span>
                                </label>
                                <div className={styles.password_wrapper}>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Минимум 6 символов"
                                    />
                                    <button
                                        type="button"
                                        className={styles.toggle_password}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                                <line x1="1" y1="1" x2="23" y2="23"/>
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                <circle cx="12" cy="12" r="3"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="confirmPassword">
                                    Подтверждение пароля <span className={styles.required}>*</span>
                                </label>
                                <div className={styles.password_wrapper}>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Повторите пароль"
                                    />
                                    <button
                                        type="button"
                                        className={styles.toggle_password}
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    >
                                        {showConfirmPassword ? (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                                                <line x1="1" y1="1" x2="23" y2="23"/>
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                                <circle cx="12" cy="12" r="3"/>
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {error && <div className={styles.error}>{error}</div>}

                            <div className={styles.agreement}>
                                Регистрируясь, вы соглашаетесь с{' '}
                                <Link to="/terms">условиями использования</Link> и{' '}
                                <Link to="/privacy">политикой конфиденциальности</Link>
                            </div>

                            <button type="submit" className={styles.register_btn}>
                                Зарегистрироваться
                            </button>
                        </form>

                        <p className={styles.login_link}>
                            Уже есть аккаунт? <Link to="/login">Войти</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;