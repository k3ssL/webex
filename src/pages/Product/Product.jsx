import {useNavigate, useParams} from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import styles from './Product.module.css';
import useAuthStore from "../../store/authStore";
import {allProducts} from "../Catalog/Catalog.jsx";

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const addItem = useCartStore((state) => state.addItem);
    const { isAuthenticated } = useAuthStore();

    const product = allProducts.find(p => p.id === Number(id));

    if (!product) {
        return <div className="container">Товар не найден</div>;
    }

    const handleAddToCart = () => {
        if (!isAuthenticated) {
            navigate('/login');
            return;
        }
        addItem({
            ...product,
        });
    };

    return (
        <div className="container">
            <div className={styles.product}>
                <div className={styles.gallery}>
                    <div className={styles.main_image}>
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>

                <div className={styles.info}>
                    <span className={styles.category}>{product.category}</span>
                    <h1 className={styles.title}>{product.name}</h1>

                    <div className={styles.price_container}>
                        <span className={styles.price}>{product.price} ₽</span>
                        {product.oldPrice && (
                            <span className={styles.old_price}>{product.oldPrice} ₽</span>
                        )}
                    </div>
                    <div className={styles.stock}>
                        {product.inStock ? (
                            <span className={styles.in_stock}>✓ В наличии</span>
                        ) : (
                            <span className={styles.out_of_stock}>✗ Нет в наличии</span>
                        )}
                    </div>

                    <button onClick={handleAddToCart} className={styles.add_to_cart_btn} disabled={!product.inStock}>
                        Добавить в корзину
                    </button>

                    <div className={styles.description}>
                        <h3 className={styles.section_title}>Описание</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;