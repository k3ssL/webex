import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';
import {Link} from "react-router-dom";
import woman from '../../assets/images/woman.jpg'
import woman2 from '../../assets/images/woman2.jpg'
import man from '../../assets/images/man.webp'
import man2 from '../../assets/images/man2.jpg'

const About = () => {
    const { ref: missionRef, inView: missionInView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const { ref: statsRef, inView: statsInView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    const team = [
        {
            id: 1,
            name: 'Александра Волкова',
            position: 'Основатель & CEO',
            bio: 'Более 10 лет в индустрии моды. Визионер, создающий пространство для самовыражения.',
            image: woman,
            social: {
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            id: 2,
            name: 'Михаил Карпов',
            position: 'Креативный директор',
            bio: 'Отвечает за визуальную идентичность и курирует дизайн-проекты.',
            image: man,
            social: {
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            id: 3,
            name: 'Елена Соколова',
            position: 'Head of Product',
            bio: 'Эксперт по качеству и развитию ассортимента.',
            image: woman2,
            social: {
                linkedin: '#',
                instagram: '#'
            }
        },
        {
            id: 4,
            name: 'Дмитрий Белов',
            position: 'Технический директор',
            bio: 'Создает технологическую основу для безупречного опыта покупок.',
            image: man2,
            social: {
                linkedin: '#',
                instagram: '#'
            }
        }
    ];

    const values = [
        {
            title: 'Качество превыше всего',
            description: 'Мы тщательно отбираем каждый продукт, чтобы вы получали только лучшее.'
        },
        {
            title: 'Устойчивое развитие',
            description: 'Поддерживаем ответственное производство и экологичные материалы.'
        },
        {
            title: 'Индивидуальный подход',
            description: 'Каждый клиент уникален, и мы создаем персональный опыт для каждого.'
        },
        {
            title: 'Инновации',
            description: 'Постоянно внедряем новые технологии для вашего комфорта.'
        }
    ];

    const milestones = [
        { year: '2020', title: 'Основание ВЕБЭКС', description: 'Начало пути с идеи создать уникальное пространство для ценителей стиля.' },
        { year: '2021', title: 'Первая коллекция', description: 'Запуск эксклюзивной линейки одежды и аксессуаров.' },
        { year: '2022', title: 'Международное признание', description: 'Выход на международный рынок и сотрудничество с мировыми брендами.' },
        { year: '2023', title: 'Инновации в технологиях', description: 'Внедрение AI-рекомендаций и виртуальной примерки.' },
        { year: '2024', title: 'ВЕБЭКС 2.0', description: 'Новый этап развития и расширение экосистемы.' }
    ];

    return (
        <main className={styles.about_page}>
            {/* Hero секция */}
            <section className={styles.hero}>
                <div className={styles.hero_bg}>
                    <div className={styles.gradient_overlay}></div>
                    <video autoPlay muted loop playsInline className={styles.hero_video}>
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-designer-working-on-a-new-collection-32885-large.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="container">
                    <div className={styles.hero_content}>
                        <span className={styles.hero_badge}>История ВЕБЭКС</span>
                        <h1 className={styles.hero_title}>
                            Создавая будущее
                            <span className={styles.hero_accent}> моды</span>
                        </h1>
                        <p className={styles.hero_description}>
                            Мы верим, что одежда — это больше, чем просто ткань. Это способ самовыражения,
                            инструмент для рассказа своей истории и отражение внутреннего мира.
                        </p>
                    </div>
                </div>
                <div className={styles.scroll_hint}>
                    <div className={styles.scroll_wheel}></div>
                </div>
            </section>

            {/* Миссия секция */}
            <section className={styles.mission} ref={missionRef}>
                <div className="container">
                    <div className={`${styles.mission_content} ${missionInView ? styles.animate : ''}`}>
                        <div className={styles.mission_text}>
                            <span className={styles.section_tag}>Наша философия</span>
                            <h2 className={styles.section_title}>
                                Миссия — вдохновлять
                                <span className={styles.title_accent}> и создавать ценность</span>
                            </h2>
                            <p className={styles.mission_description}>
                                ВЕБЭКС родилась из желания изменить подход к онлайн-шопингу. Мы создали пространство,
                                где минимализм встречается с элегантностью, а технологии служат человеческому комфорту.
                            </p>
                            <div className={styles.mission_stats}>
                                <div className={styles.stat_item}>
                                    <span className={styles.stat_number}>500+</span>
                                    <span className={styles.stat_label}>Брендов-партнеров</span>
                                </div>
                                <div className={styles.stat_item}>
                                    <span className={styles.stat_number}>50K+</span>
                                    <span className={styles.stat_label}>Довольных клиентов</span>
                                </div>
                                <div className={styles.stat_item}>
                                    <span className={styles.stat_number}>24/7</span>
                                    <span className={styles.stat_label}>Поддержка</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ценности секция */}
            <section className={styles.values}>
                <div className="container">
                    <div className={styles.values_header}>
                        <span className={styles.section_tag}>Наши ценности</span>
                        <h2 className={styles.section_title}>
                            Принципы, которые нас
                            <span className={styles.title_accent}> объединяют</span>
                        </h2>
                    </div>
                    <div className={styles.values_grid}>
                        {values.map((value, index) => (
                            <div key={index} className={styles.value_card}>
                                <div className={styles.value_icon}>{value.icon}</div>
                                <h3 className={styles.value_title}>{value.title}</h3>
                                <p className={styles.value_description}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* История секция с таймлайном */}
            <section className={styles.history}>
                <div className="container">
                    <div className={styles.history_header}>
                        <span className={styles.section_tag}>Наш путь</span>
                        <h2 className={styles.section_title}>
                            История успеха,
                            <span className={styles.title_accent}> написанная вместе</span>
                        </h2>
                    </div>
                    <div className={styles.timeline}>
                        {milestones.map((milestone, index) => (
                            <div key={index} className={styles.timeline_item}>
                                <div className={styles.timeline_year}>{milestone.year}</div>
                                <div className={styles.timeline_content}>
                                    <h3 className={styles.timeline_title}>{milestone.title}</h3>
                                    <p className={styles.timeline_description}>{milestone.description}</p>
                                </div>
                                {index < milestones.length - 1 && <div className={styles.timeline_line}></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Команда секция */}
            <section className={styles.team}>
                <div className="container">
                    <div className={styles.team_header}>
                        <span className={styles.section_tag}>Команда мечты</span>
                        <h2 className={styles.section_title}>
                            Люди, создающие
                            <span className={styles.title_accent}> магию ВЕБЭКС</span>
                        </h2>
                        <p className={styles.team_subtitle}>
                            Талантливые профессионалы, объединенные общей страстью к моде и инновациям
                        </p>
                    </div>
                    <div className={styles.team_grid}>
                        {team.map(member => (
                            <div key={member.id} className={styles.team_card}>
                                <div className={styles.team_image}>
                                    <img src={member.image} alt={member.name} />
                                    <div className={styles.team_social}>
                                        <a href={member.social.linkedin} className={styles.social_link}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
                                            </svg>
                                        </a>
                                        <a href={member.social.instagram} className={styles.social_link}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.team_info}>
                                    <h3 className={styles.team_name}>{member.name}</h3>
                                    <p className={styles.team_position}>{member.position}</p>
                                    <p className={styles.team_bio}>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Преимущества секция */}
            <section className={styles.advantages}>
                <div className="container">
                    <div className={styles.advantages_content}>
                        <div className={styles.advantages_text}>
                            <span className={styles.section_tag}>Почему выбирают нас</span>
                            <h2 className={styles.section_title}>
                                Преимущества работы
                                <span className={styles.title_accent}> с ВЕБЭКС</span>
                            </h2>
                            <div className={styles.advantages_list}>
                                <div className={styles.advantage_item}>
                                    <div>
                                        <h4>Эксклюзивные коллекции</h4>
                                        <p>Только проверенные бренды и лимитированные серии</p>
                                    </div>
                                </div>
                                <div className={styles.advantage_item}>
                                    <div>
                                        <h4>Быстрая доставка</h4>
                                        <p>Бесплатная доставка по всей России от 5000 ₽</p>
                                    </div>
                                </div>
                                <div className={styles.advantage_item}>
                                    <div>
                                        <h4>Легкий возврат</h4>
                                        <p>14 дней на возврат без лишних вопросов</p>
                                    </div>
                                </div>
                                <div className={styles.advantage_item}>
                                    <div>
                                        <h4>Безопасная оплата</h4>
                                        <p>Защищенные платежи и различные способы оплаты</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA секция */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.cta_content}>
                        <h2 className={styles.cta_title}>
                            Готовы стать частью
                            <span className={styles.cta_accent}> истории ВЕБЭКС?</span>
                        </h2>
                        <p className={styles.cta_description}>
                            Присоединяйтесь к сообществу ценителей стиля и качества
                        </p>
                        <div className={styles.cta_buttons}>
                            <Link to={'/'} className={styles.cta_primary}>
                                Начать покупки
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </Link>
                            <button className={styles.cta_secondary}>
                                Связаться с нами
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;