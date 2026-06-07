import { useState, useEffect } from 'react';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        topic: 'consultation'
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Блокировка прокрутки при открытом модальном окне
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Закрытие по Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Убираем ошибку при вводе
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Введите имя';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Имя должно содержать минимум 2 символа';
        }

        if (!formData.phone.trim() && !formData.email.trim()) {
            newErrors.phone = 'Введите телефон или email';
            newErrors.email = 'Введите телефон или email';
        }

        if (formData.phone.trim() && !/^\+?[\d\s\-()]{10,}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Введите корректный номер телефона';
        }

        if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Введите корректный email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Введите сообщение';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Сообщение должно содержать минимум 10 символов';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsLoading(true);

        // Имитация отправки
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSubmitted(true);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: '',
                topic: 'consultation'
            });
        } catch (error) {
            setErrors({ submit: 'Ошибка отправки. Попробуйте позже.' });
        } finally {
            setIsLoading(false);
        }
    };

    const handleClose = () => {
        if (!isLoading) {
            setIsSubmitted(false);
            setErrors({});
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={handleClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.close_btn} onClick={handleClose} aria-label="Закрыть">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>

                {isSubmitted ? (
                    <div className={styles.success}>
                        <div className={styles.success_icon}>
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                        </div>
                        <h2 className={styles.success_title}>Заявка отправлена!</h2>
                        <p className={styles.success_text}>
                            Спасибо за обращение! Наш специалист свяжется с вами в течение 15 минут.
                        </p>
                        <button className={styles.submit_btn} onClick={handleClose}>
                            Закрыть
                        </button>
                    </div>
                ) : (
                    <>
                        <div className={styles.header}>
                            <h2 className={styles.title}>Связаться с нами</h2>
                            <p className={styles.subtitle}>
                                Оставьте заявку, и мы перезвоним вам в течение 15 минут
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.topic_group}>
                                <label className={styles.topic_label}>Тема обращения:</label>
                                <div className={styles.topic_list}>
                                    {[
                                        { id: 'consultation', name: 'Консультация' },
                                        { id: 'calculation', name: 'Расчёт проекта' },
                                        { id: 'installation', name: 'Монтаж' },
                                        { id: 'support', name: 'Поддержка' },
                                    ].map(topic => (
                                        <button
                                            key={topic.id}
                                            type="button"
                                            className={`${styles.topic_btn} ${formData.topic === topic.id ? styles.active : ''}`}
                                            onClick={() => setFormData(prev => ({ ...prev, topic: topic.id }))}
                                        >
                                            {topic.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

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
                                    placeholder="Как к вам обращаться?"
                                    className={errors.name ? styles.error_input : ''}
                                />
                                {errors.name && <span className={styles.error_text}>{errors.name}</span>}
                            </div>

                            <div className={styles.row}>
                                <div className={styles.input_group}>
                                    <label htmlFor="phone">
                                        Телефон <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+7 (999) 123-45-67"
                                        className={errors.phone ? styles.error_input : ''}
                                    />
                                    {errors.phone && <span className={styles.error_text}>{errors.phone}</span>}
                                </div>

                                <div className={styles.input_group}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@mail.com"
                                        className={errors.email ? styles.error_input : ''}
                                    />
                                    {errors.email && <span className={styles.error_text}>{errors.email}</span>}
                                </div>
                            </div>

                            <div className={styles.input_group}>
                                <label htmlFor="message">
                                    Сообщение <span className={styles.required}>*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Опишите ваш вопрос или задачу..."
                                    rows="4"
                                    className={errors.message ? styles.error_input : ''}
                                />
                                {errors.message && <span className={styles.error_text}>{errors.message}</span>}
                            </div>

                            {errors.submit && (
                                <div className={styles.submit_error}>{errors.submit}</div>
                            )}

                            <button
                                type="submit"
                                className={styles.submit_btn}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <span className={styles.spinner}></span>
                                        Отправка...
                                    </>
                                ) : (
                                    <>
                                        Отправить заявку
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7"/>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default ContactModal;