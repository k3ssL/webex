import Hero from '../../components/Hero/Hero';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Home.module.css';
import {Link} from "react-router-dom";
import collection from '../../assets/images/collection.jpg'
import nvr_1_10 from "../../assets/images/nvr_1_10.png";
import nvr_1_16_8p from "../../assets/images/nvr_1_16(8p).png";
import hvr_04052 from "../../assets/images/hvr_04052.png";
import poe_inj from "../../assets/images/PoE-инжектор (пассивный).webp";
import ip_202_2_8FPM from "../../assets/images/ip-202_FPM-2-8.png";

const products = [
    {
        id: 1,
        name: 'NVR-1/10',
        category: 'IP-Видеорегистратор',
        price: 3350,
        image: nvr_1_10,
        inStock: false,
        isNew: true
    },
    {
        id: 8,
        name: 'NVR-1/16 (8P)',
        category: 'IP-Видеорегистратор с Poe',
        price: 8525,
        image: nvr_1_16_8p,
        inStock: true,
        isNew: true
    },
    {
        id: 10,
        name: 'HVR-0405',
        category: 'AHD Видеорегистратор',
        price: 5803,
        image: hvr_04052,
        inStock: true,
    },
    {
        id: 24,
        name: 'PoE-инжектор (пассивный)',
        category: 'Сетевое оборудование',
        price: 668,
        image: poe_inj,
        inStock: true,
        isNew: true
    },
    {
        id: 14,
        name: 'IP-202 FPM (2.8) 1H',
        category: 'IP Камеры 2 Мегапикселя',
        price: 1463,
        image: ip_202_2_8FPM,
        inStock: true,
        discount: 33
    },
];

const Home = () => {
    return (
        <main>
            <Hero />

            <section className={styles.featured}>
                <div className="container">
                    <div className={styles.section_header}>
                        <h2 className={styles.section_title}>Популярные решения</h2>
                        <p className={styles.section_subtitle}>
                            Надёжное оборудование для вашей безопасности
                        </p>
                    </div>

                    <div className={styles.products_grid}>
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.banner}>
                <div className="container">
                    <div className={styles.banner_content}>
                        <div className={styles.banner_text}>
                            <span className={styles.banner_badge}>Акция месяца</span>
                            <h2 className={styles.banner_title}>Установка системы безопасности «под ключ»</h2>
                            <p className={styles.banner_description}>
                                Полный комплекс: проектирование, оборудование, монтаж и настройка.
                                Настройка удалённого доступа и обучение пользованию — в подарок.
                            </p>
                            <Link to={'/catalog'} className={styles.banner_btn}>
                                Смотреть оборудование
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </Link>
                        </div>
                        <div className={styles.banner_image}>
                            <img src={collection} alt="Collection" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;