import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Catalog.module.css';
import whiteShirt from '../../assets/images/white_shirt.jpeg'
import sumka from '../../assets/images/sumka.webp'
import watch from '../../assets/images/watch.webp'
import asics from '../../assets/images/asics.webp'
import switer from '../../assets/images/switer.webp'
import jeans from '../../assets/images/jeans.webp'
import airpods from '../../assets/images/airpods.webp'
import remen from '../../assets/images/remen.webp'
import palto from '../../assets/images/palto.webp'
import bag from '../../assets/images/bag.jpg'
import glasses from '../../assets/images/glasses.jpg'
import plate from '../../assets/images/plate.jpg'

// Данные товаров для каталога
const allProducts = [
    {
        id: 1,
        name: 'Минималистичная футболка',
        category: 'Одежда',
        subcategory: 'Футболки',
        price: 2990,
        oldPrice: 4990,
        image: whiteShirt,
        rating: 4.8,
        reviews: 124,
        isNew: true,
        inStock: true,
        colors: ['Черный', 'Белый', 'Серый'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
        id: 2,
        name: 'Кожаная сумка',
        category: 'Аксессуары',
        subcategory: 'Сумки',
        price: 12990,
        image: sumka,
        rating: 4.9,
        reviews: 87,
        isNew: true,
        inStock: true,
        colors: ['Черный', 'Коричневый'],
        sizes: ['One size']
    },
    {
        id: 3,
        name: 'Смарт-часы',
        category: 'Электроника',
        subcategory: 'Гаджеты',
        price: 24990,
        oldPrice: 29990,
        image: watch,
        rating: 4.7,
        reviews: 203,
        discount: 17,
        inStock: true,
        colors: ['Черный', 'Серебристый'],
        sizes: ['One size']
    },
    {
        id: 4,
        name: 'Дизайнерские кроссовки',
        category: 'Обувь',
        subcategory: 'Кроссовки',
        price: 8990,
        image: asics,
        rating: 4.8,
        reviews: 156,
        isNew: true,
        inStock: true,
        colors: ['Белый', 'Черный', 'Красный'],
        sizes: ['36', '37', '38', '39', '40', '41', '42']
    },
    {
        id: 5,
        name: 'Шерстяной свитер',
        category: 'Одежда',
        subcategory: 'Свитеры',
        price: 5990,
        oldPrice: 8990,
        image: switer,
        rating: 4.6,
        reviews: 92,
        discount: 33,
        inStock: true,
        colors: ['Бежевый', 'Серый', 'Синий'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 6,
        name: 'Солнцезащитные очки',
        category: 'Аксессуары',
        subcategory: 'Очки',
        price: 3990,
        image: glasses,
        rating: 4.5,
        reviews: 67,
        isNew: true,
        inStock: true,
        colors: ['Черный', 'Золотой', 'Серебристый'],
        sizes: ['One size']
    },
    {
        id: 7,
        name: 'Джинсы Slim Fit',
        category: 'Одежда',
        subcategory: 'Джинсы',
        price: 4990,
        image: jeans,
        rating: 4.7,
        reviews: 178,
        inStock: true,
        colors: ['Синий', 'Черный', 'Серый'],
        sizes: ['28', '29', '30', '31', '32', '33', '34']
    },
    {
        id: 8,
        name: 'Беспроводные наушники',
        category: 'Электроника',
        subcategory: 'Аудио',
        price: 12990,
        image: airpods,
        rating: 4.9,
        reviews: 245,
        isNew: true,
        inStock: true,
        colors: ['Белый', 'Черный'],
        sizes: ['One size']
    },
    {
        id: 9,
        name: 'Кожаный ремень',
        category: 'Аксессуары',
        subcategory: 'Ремни',
        price: 2490,
        image: remen,
        rating: 4.4,
        reviews: 43,
        inStock: true,
        colors: ['Черный', 'Коричневый'],
        sizes: ['S', 'M', 'L', 'XL']
    },
    {
        id: 10,
        name: 'Пальто Oversize',
        category: 'Одежда',
        subcategory: 'Верхняя одежда',
        price: 15990,
        oldPrice: 19990,
        image: palto,
        rating: 4.8,
        reviews: 112,
        discount: 20,
        inStock: true,
        colors: ['Черный', 'Бежевый', 'Серый'],
        sizes: ['S', 'M', 'L']
    },
    {
        id: 11,
        name: 'Рюкзак',
        category: 'Аксессуары',
        subcategory: 'Сумки',
        price: 6990,
        image: bag,
        rating: 4.6,
        reviews: 89,
        inStock: true,
        colors: ['Черный', 'Оливковый'],
        sizes: ['One size']
    },
    {
        id: 12,
        name: 'Платье-миди',
        category: 'Одежда',
        subcategory: 'Платья',
        price: 8990,
        image: plate,
        rating: 4.7,
        reviews: 134,
        isNew: true,
        inStock: true,
        colors: ['Черный', 'Красный', 'Синий'],
        sizes: ['XS', 'S', 'M', 'L']
    }
];

const categories = [
    { id: 'all', name: 'Все товары' },
    { id: 'Одежда', name: 'Одежда' },
    { id: 'Обувь', name: 'Обувь' },
    { id: 'Аксессуары', name: 'Аксессуары' },
    { id: 'Электроника', name: 'Электроника ' }
];

const sortOptions = [
    { id: 'popular', name: 'Популярные' },
    { id: 'newest', name: 'Новинки' },
    { id: 'price_asc', name: 'Цена: по возрастанию' },
    { id: 'price_desc', name: 'Цена: по убыванию' },
    { id: 'rating', name: 'По рейтингу' }
];

const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState(allProducts);
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Состояния фильтров
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
    const [priceRange, setPriceRange] = useState([0, 30000]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'popular');
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

    // Уникальные цвета и размеры для фильтров
    const allColors = [...new Set(allProducts.flatMap(p => p.colors || []))];
    const allSizes = [...new Set(allProducts.flatMap(p => p.sizes || []))];

    // Применение фильтров
    useEffect(() => {
        let result = [...products];

        // Поиск
        if (searchQuery) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Категория
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Цена
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Цвета
        if (selectedColors.length > 0) {
            result = result.filter(p =>
                p.colors && p.colors.some(c => selectedColors.includes(c))
            );
        }

        // Размеры
        if (selectedSizes.length > 0) {
            result = result.filter(p =>
                p.sizes && p.sizes.some(s => selectedSizes.includes(s))
            );
        }

        // Только в наличии
        if (inStockOnly) {
            result = result.filter(p => p.inStock);
        }

        // Сортировка
        result = [...result].sort((a, b) => {
            switch (sortBy) {
                case 'price_asc':
                    return a.price - b.price;
                case 'price_desc':
                    return b.price - a.price;
                case 'rating':
                    return (b.rating || 0) - (a.rating || 0);
                case 'newest':
                    return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
                default:
                    return (b.rating || 0) - (a.rating || 0);
            }
        });

        setFilteredProducts(result);

        // Обновление URL параметров
        const params = {};
        if (selectedCategory !== 'all') params.category = selectedCategory;
        if (sortBy !== 'popular') params.sort = sortBy;
        if (searchQuery) params.search = searchQuery;
        setSearchParams(params);
    }, [selectedCategory, priceRange, selectedColors, selectedSizes, inStockOnly, sortBy, searchQuery, products]);

    const handleColorToggle = (color) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const handleSizeToggle = (size) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const clearFilters = () => {
        setSelectedCategory('all');
        setPriceRange([0, 30000]);
        setSelectedColors([]);
        setSelectedSizes([]);
        setInStockOnly(false);
        setSearchQuery('');
        setSortBy('popular');
    };

    return (
        <div className={styles.catalog_page}>
            {/* Hero секция каталога */}
            <section className={styles.hero}>
                <div className={styles.hero_bg}>
                    <div className={styles.gradient_overlay}></div>
                </div>
                <div className="container">
                    <div className={styles.hero_content}>
                        <h1 className={styles.hero_title}>Каталог оборудования</h1>
                        <p className={styles.hero_description}>
                            Профессиональное оборудование для систем безопасности. Только проверенные бренды с гарантией 3 года
                        </p>
                    </div>
                </div>
            </section>

            <div className="container">
                {/* Поиск и сортировка */}
                <div className={styles.catalog_header}>
                    <div className={styles.search_container}>
                        <div className={styles.search_wrapper}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                            <input
                                type="text"
                                placeholder="Поиск товаров..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={styles.search_input}
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery('')} className={styles.clear_search}>
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    <div className={styles.sort_container}>
                        <label className={styles.sort_label}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 6h18M6 12h12M10 18h4"/>
                            </svg>
                            Сортировка:
                        </label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={styles.sort_select}>
                            {sortOptions.map(option => (
                                <option key={option.id} value={option.id}>{option.name}</option>
                            ))}
                        </select>
                    </div>

                    <button
                        className={styles.filter_toggle}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="22 3 2 3 10 13 10 21 14 18 14 13 22 3"/>
                        </svg>
                        Фильтры
                        {(selectedColors.length > 0 || selectedSizes.length > 0 || inStockOnly || selectedCategory !== 'all') && (
                            <span className={styles.filter_badge}>
                {selectedColors.length + selectedSizes.length + (inStockOnly ? 1 : 0) + (selectedCategory !== 'all' ? 1 : 0)}
              </span>
                        )}
                    </button>
                </div>

                <div className={styles.catalog_layout}>
                    {/* Фильтры (десктоп) */}
                    <aside className={`${styles.filters} ${isFilterOpen ? styles.filters_open : ''}`}>
                        <div className={styles.filters_header}>
                            <h3 className={styles.filters_title}>Фильтры</h3>
                            <button onClick={clearFilters} className={styles.clear_filters}>
                                Сбросить все
                            </button>
                        </div>

                        {/* Категории */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Категории</h4>
                            <div className={styles.category_list}>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        className={`${styles.category_btn} ${selectedCategory === cat.id ? styles.active : ''}`}
                                        onClick={() => setSelectedCategory(cat.id)}
                                    >
                                        <span className={styles.category_icon}>{cat.icon}</span>
                                        <span>{cat.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Цена */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Цена</h4>
                            <div className={styles.price_range}>
                                <div className={styles.price_inputs}>
                                    <input
                                        type="number"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                        className={styles.price_input}
                                        placeholder="от"
                                    />
                                    <span>—</span>
                                    <input
                                        type="number"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                        className={styles.price_input}
                                        placeholder="до"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="30000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    className={styles.price_slider}
                                />
                            </div>
                        </div>

                        {/* Цвета */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Цвет</h4>
                            <div className={styles.color_list}>
                                {allColors.map(color => (
                                    <button
                                        key={color}
                                        className={`${styles.color_filter} ${selectedColors.includes(color) ? styles.active : ''}`}
                                        onClick={() => handleColorToggle(color)}
                                    >
                    <span
                        className={styles.color_dot}
                        style={{ backgroundColor: getColorValue(color) }}
                    ></span>
                                        <span>{color}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Размеры */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Размер</h4>
                            <div className={styles.size_list}>
                                {allSizes.map(size => (
                                    <button
                                        key={size}
                                        className={`${styles.size_filter} ${selectedSizes.includes(size) ? styles.active : ''}`}
                                        onClick={() => handleSizeToggle(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Наличие */}
                        <div className={styles.filter_section}>
                            <label className={styles.checkbox_label}>
                                <input
                                    type="checkbox"
                                    checked={inStockOnly}
                                    onChange={(e) => setInStockOnly(e.target.checked)}
                                    className={styles.checkbox}
                                />
                                <span>Только в наличии</span>
                            </label>
                        </div>
                    </aside>

                    {/* Товары */}
                    <main className={styles.products_area}>
                        <div className={styles.results_info}>
                            <span>Найдено {filteredProducts.length} товаров</span>
                        </div>

                        {filteredProducts.length === 0 ? (
                            <div className={styles.no_results}>
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="M21 21l-4.35-4.35"/>
                                </svg>
                                <h3>Товары не найдены</h3>
                                <p>Попробуйте изменить параметры фильтрации</p>
                                <button onClick={clearFilters} className={styles.reset_btn}>
                                    Сбросить фильтры
                                </button>
                            </div>
                        ) : (
                            <div className={styles.products_grid}>
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

// Вспомогательная функция для получения цвета
function getColorValue(color) {
    const colorMap = {
        'Черный': '#000000',
        'Белый': '#FFFFFF',
        'Серый': '#808080',
        'Красный': '#E31B23',
        'Синий': '#3B82F6',
        'Коричневый': '#8B4513',
        'Бежевый': '#F5F5DC',
        'Золотой': '#FFD700',
        'Серебристый': '#C0C0C0',
        'Оливковый': '#808000'
    };
    return colorMap[color] || '#CCCCCC';
}

export default Catalog;