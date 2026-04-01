import { Link } from 'react-router-dom';
import useCartStore from '../../store/cartStore';
import useAuthStore from '../../store/authStore';
import styles from './Cart.module.css';

const Cart = () => {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
    const { isAuthenticated } = useAuthStore();

    const totalPrice = getTotalPrice();
    const deliveryPrice = totalPrice > 5000 ? 0 : 500;
    const finalPrice = totalPrice + deliveryPrice;

    if (items.length === 0) {
        return (
            <div className="container">
                <div className={styles.empty_cart}>
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                    <h2>Корзина пуста</h2>
                    <p>Добавьте товары из каталога, чтобы оформить заказ</p>
                    <Link to="/" className={styles.continue_shopping_btn}>
                        Перейти к покупкам
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className={styles.cart}>
                <h1 className={styles.title}>Корзина</h1>

                <div className={styles.cart_content}>
                    <div className={styles.items_list}>
                        {items.map(item => (
                            <div key={item.id} className={styles.cart_item}>
                                <div className={styles.item_image}>
                                    <img src={item.image} alt={item.name} />
                                </div>

                                <div className={styles.item_info}>
                                    <Link to={`/product/${item.id}`} className={styles.item_name}>
                                        {item.name}
                                    </Link>
                                    {item.size && (
                                        <span className={styles.item_meta}>Размер: {item.size}</span>
                                    )}
                                    {item.color && (
                                        <span className={styles.item_meta}>Цвет: {item.color}</span>
                                    )}
                                    <span className={styles.item_price}>{item.price} ₽</span>
                                </div>

                                <div className={styles.item_quantity}>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className={styles.qty_btn}
                                    >
                                        -
                                    </button>
                                    <span className={styles.qty_value}>{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className={styles.qty_btn}
                                    >
                                        +
                                    </button>
                                </div>

                                <div className={styles.item_total}>
                                    {item.price * item.quantity} ₽
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className={styles.remove_btn}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        ))}

                        <button onClick={clearCart} className={styles.clear_cart_btn}>
                            Очистить корзину
                        </button>
                    </div>

                    <div className={styles.summary}>
                        <h2 className={styles.summary_title}>Итого</h2>

                        <div className={styles.summary_row}>
                            <span>Товары ({items.reduce((sum, i) => sum + i.quantity, 0)} шт.)</span>
                            <span>{totalPrice} ₽</span>
                        </div>

                        <div className={styles.summary_row}>
                            <span>Доставка</span>
                            <span>{deliveryPrice === 0 ? 'Бесплатно' : `${deliveryPrice} ₽`}</span>
                        </div>

                        {deliveryPrice > 0 && (
                            <div className={styles.delivery_note}>
                                Бесплатная доставка при заказе от 5000 ₽
                            </div>
                        )}

                        <div className={styles.summary_total}>
                            <span>К оплате</span>
                            <span className={styles.total_price}>{finalPrice} ₽</span>
                        </div>

                        <button className={styles.checkout_btn} disabled={!isAuthenticated}>
                            {isAuthenticated ? 'Оформить заказ' : 'Войдите, чтобы оформить заказ'}
                        </button>

                        {!isAuthenticated && (
                            <p className={styles.auth_note}>
                                <Link to="/login">Войдите</Link> в аккаунт для оформления заказа
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;