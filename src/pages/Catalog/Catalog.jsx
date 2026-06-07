import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './Catalog.module.css';
import nvr_1_10 from "../../assets/images/nvr_1_10.png"
import nvr_1_16 from "../../assets/images/nvr_1_16.png"
import nvr_1_36 from "../../assets/images/nvr-1_36.png"
import nvr_1_10_4p from "../../assets/images/nvr_1_10(4p).png"
import nvr_1_16_8p from "../../assets/images/nvr_1_16(8p).png"
import nvr_2_36 from "../../assets/images/nvr_2_36.png"
import nvr_8_64 from "../../assets/images/nvr_8_64.png"
import nvr_4_36 from "../../assets/images/nvr_4_36.png"
import hvr_0805N from '../../assets/images/hvr-0805N.png'
import hvr_0805Np from '../../assets/images/hvr-0805Np.png'
import hvr_04051 from '../../assets/images/hvr_04051.png'
import hvr_04052 from '../../assets/images/hvr_04052.png'
import ip_202_FPM from '../../assets/images/ip-202_FPM.png'
import ip_202_2_8FPM from '../../assets/images/ip-202_FPM-2-8.png'
import ip_206 from '../../assets/images/ip-206.png'
import ip_302_FPM from '../../assets/images/IP-302 FPM (2.8) 1.png'
import ip_302_FPM_1V from '../../assets/images/IP-302 FPM (2.8) 1V.webp'
import ip_402_FPA_2_8 from '../../assets/images/IP-402 FPA (2.8) 1.webp'
import ip_402_FPM_2_8 from '../../assets/images/IP-402 FPM (2.8) 1.png'
import ip_403_VPA_2_8 from '../../assets/images/IP-403 VPA (2.8-12) 1.webp'
import ip_pt206 from '../../assets/images/ip-pt206.jpeg'
import poe_udl from '../../assets/images/poe-udl.webp'
import poe_inj from '../../assets/images/PoE-инжектор (пассивный).webp'
import poe_udl30VT from '../../assets/images/PoE-удлинитель (30Вт) 1_3.webp'


const category = {
    IP_VIDEO_RECORDER: {id: 1, category: "IP-Видеорегистратор", subcategory: "IP-Видеорегистратор"},
    IP_VIDEO_RECORDER_POE: {id: 2, category: "IP-Видеорегистратор с PoE", subcategory: "IP-Видеорегистратор с PoE"},
    AHD_VIDEO_RECORDER: {id: 3, category: "AHD Видеорегистратор", subcategory: "AHD Видеорегистратор"},
    IP_CAMS_2MP: {id: 4, category: "IP Камеры 2 Мегапикселя", subcategory: "IP Камеры 2 Мегапикселя"},
    IP_CAMS_3MP: {id: 5, category: "IP Камеры 3 Мегапикселя", subcategory: "IP Камеры 3 Мегапикселя"},
    IP_CAMS_4MP: {id: 6, category: "IP Камеры 4 Мегапикселя", subcategory: "IP Камеры 4 Мегапикселя"},
    NETWORK_EQUIPMENT: {id: 7, category: "Сетевое оборудование", subcategory: "Сетевое оборудование"},
}

const brands = {
    AKSILIUM: {id: 1, name: 'AKSILIUM'}
}
// Данные товаров для каталога охранных систем
export const allProducts = [
    {
        id: 1,
        name: 'NVR-1/10',
        category: category.IP_VIDEO_RECORDER.category,
        subcategory: category.IP_VIDEO_RECORDER.subcategory,
        price: 3350,
        image: nvr_1_10,
        rating: 4.8,
        reviews: 124,
        isNew: true,
        inStock: false,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        features: ['Wi-Fi', 'Сенсорный экран', 'Ночное видение'],
        description: "10 каналов, 10х4К (25 к/с), H.264/H.264+/H.265/H.265+, 1 SATA 3.5\" до 10Tб (в комплект не входит), 10/100 Мбит/с Ethernet порт, БП 2А в комплекте, облако Xmeye\n" +
            "Функции аналитики*: Захват лица, Детекция транспорта*",
        warranty: 1
    },
    {
        id: 2,
        name: 'NVR-1/16',
        category: category.IP_VIDEO_RECORDER.category,
        subcategory: category.IP_VIDEO_RECORDER.subcategory,
        price: 4425,
        image: nvr_1_16,
        rating: 4.9,
        reviews: 87,
        isNew: true,
        inStock: false,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        features: ['Full HD', 'ИК-подсветка', 'IP67'],
        description: "16 каналов, 16х8Мп (25 к/с), H.264/H.264+/H.265/H.265+, 1 SATA 3.5\" до 10Tб (в комплект не входит), 10/100 Мбит/с Ethernet порт, БП 3А в комплекте, облако Xmeye\n" +
            "Функции аналитики*: Захват лица, Детекция транспорта*",
        warranty: 1
    },
    {
        id: 3,
        name: 'NVR-1/36',
        category: category.IP_VIDEO_RECORDER.category,
        subcategory: category.IP_VIDEO_RECORDER.subcategory,
        price: 8550,
        image: nvr_1_36,
        rating: 4.7,
        reviews: 203,
        discount: 17,
        inStock: false,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        features: ['Мобильное приложение', 'Датчики движения', 'Сирена'],
        description: "36 каналов, 36x4K (25 к/с), 36х1080Р (25 к/с), H.264/H.264+/H.265/H.265+, аудио 1/1, 1 SATA 3.5\" 1x14Tб (в комплект не входит), 10/100/1000 Мбит/с Ethernet порт, БП 5А в комплекте, облако Xmeye\n" +
            "Функции аналитики*: Захват лица, Детекция транспорта*, Пересечение периметра, Выход из области, Вторжение в область, Пересечение области. ",
        warranty: 2
    },
    {
        id: 4,
        name: 'NVR-2/36',
        category: category.IP_VIDEO_RECORDER.category,
        subcategory: category.IP_VIDEO_RECORDER.subcategory,
        price: 9750,
        image: nvr_2_36,
        rating: 4.8,
        reviews: 156,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        features: ['Отпечатки пальцев', 'RFID-карты', 'ПО в комплекте'],
        description: "36 каналов, 36x4K (25 к/с), 36х1080Р (25 к/с), H.264/H.264+/H.265/H.265+, аудио 1/1, 2 SATA 3.5\" 2x14Tб (в комплект не входит), 10/100/1000 Мбит/с Ethernet порт, БП 5А в комплекте, облако Xmeye\n" +
            "Функции аналитики*: Захват лица, Детекция транспорта*, Пересечение периметра, Выход из области, Вторжение в область, Пересечение области. ",
        warranty: 1
    },
    {
        id: 5,
        name: 'NVR-4/36',
        category: category.IP_VIDEO_RECORDER.category,
        subcategory: category.IP_VIDEO_RECORDER.subcategory,
        price: 20000,
        image: nvr_4_36,
        rating: 4.6,
        reviews: 92,
        discount: 33,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        features: ['Датчики дыма', 'Оповещатели', 'Пульт управления'],
        description: "36 каналов, 36x4K (25 к/с), 36х1080Р (25 к/с), H.264/H.264+/H.265/H.265+, аудио 1/1, тревога 16/4, 4 SATA 3.5\" 4x14Tб (в комплект не входит), 10/100/1000 Мбит/с Ethernet порт, вентилятор, БП 6А в комплекте, облако Xmeye\n" +
            "Функции аналитики*: Захват лица, Детекция транспорта*, Пересечение периметра, Выход из области, Вторжение в область, Пересечение области. ",
        warranty: 1
    },
    {
        id: 6,
        name: 'NVR-8/64',
        category: category.IP_VIDEO_RECORDER.category,
        subcategory: category.IP_VIDEO_RECORDER.subcategory,
        price: 47500,
        image: nvr_8_64,
        rating: 4.5,
        reviews: 67,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        description: "64 канала, 25 к/с: 64x8Mр, H.264/H.264+/H.265/H.265+, аудио 1/1, тревога 16/4, 8 SATA 3.5\" 8x10Tб (в комплект не входит), 2*10/100/1000 Мбит/с Ethernet порт, вентилятор, встроенный БП, облако Xmeye\n" +
            "Функции аналитики: Захват лица, Детекция транспорта*, Пересечение периметра, Выход из области, Вторжение в область, Пересечение области. ",
        features: ['Угол 180°', 'Дальность 15м', 'Иммунитет к животным'],
        warranty: 1
    },
    {
        id: 7,
        name: 'NVR-1/10 (4P)',
        category: category.IP_VIDEO_RECORDER_POE.category,
        subcategory: category.IP_VIDEO_RECORDER_POE.subcategory,
        price: 4995,
        image: nvr_1_10_4p,
        rating: 4.7,
        reviews: 178,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        description: "10 каналов, 10х4К до 25 к/с, H.264/H.264+/H.265/H.265+, 1 аудио вых., 4 PoE-порта, 1 SATA 3.5\" до 10Tб (в комплект не входит), 4*10/100 Мбит/с PoE + 10/100 Мбит/с Ethernet порт, бюджет PoE 42Вт, облако XMeye, питание DC 52B, БП 1,25А в комплекте, передача PoE до 250 м.\n" +
            "Функции аналитики*: Захват лица, Детекция транспорта*",
        features: ['16 каналов', '4K запись', 'Жесткий диск 4TB'],
        warranty: 7
    },
    {
        id: 8,
        name: 'NVR-1/16 (8P)',
        category: category.IP_VIDEO_RECORDER_POE.category,
        subcategory: category.IP_VIDEO_RECORDER_POE.subcategory,
        price: 8525,
        image: nvr_1_16_8p,
        rating: 4.9,
        reviews: 245,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        description: "16 каналов, 16х4К до 25 к/с, H.264/H.264+/H.265/H.265+, 1 аудио вых., 8 PoE-портов, 1 SATA 3.5\" до 10Tб (в комплект не входит), 8*10/100 Мбит/с PoE + 10/100 Мбит/с Ethernet порт, бюджет PoE 96Вт, облако XMeye, питание DC 52B, БП  2,3А в комплекте.\n" +
            "Функции аналитики*: Захват лица, Пересечение периметра, Выход из области, Вторжение в область, Пересечение области. ",
        features: ['24 дюйма', 'Full HD', 'VESA крепление'],
        warranty: 2
    },
    {
        id: 9,
        name: 'HVR-0405 (аудио 1 вх.1 вых.)',
        category: category.AHD_VIDEO_RECORDER.category,
        subcategory: category.AHD_VIDEO_RECORDER.subcategory,
        price: 4730,
        image: hvr_04051,
        rating: 4.4,
        reviews: 43,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        description: "4 канала, AHD/IP/CVBS/TVI/CVI, кодеки H.265X(H.264)/H.265/H.265+; 10/100 Мбит/с Ethernet порт;\n" +
            "\n" +
            "Только аналог: 4x5Mр (13 к/с), 8M-N (7 к/с);\n" +
            "Аналог+IP: 4x5Mп (13 к/с) + 4x5Mп (25 к/с);\n" +
            "Только IP: 16x5Mп (25 к/с), 16x1080P (25 к/с);\n" +
            "\n" +
            "аудио 1/1, облако XMeye, 1 SATA 3.5\" до 14Tб (в комплект не входит), БП 3А в комплекте;\n" +
            "Функции аналитики: Захват лица, детекция людей, детекция транспорта",
        features: ['12В 5А', 'Защита от КЗ', 'Индикация'],
        warranty: 5
    },
    {
        id: 10,
        name: 'HVR-0405',
        category: category.AHD_VIDEO_RECORDER.category,
        subcategory: category.AHD_VIDEO_RECORDER.subcategory,
        price: 5803,
        oldPrice: 32990,
        image: hvr_04052,
        rating: 4.8,
        reviews: 112,
        discount: 20,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        description: "4 канала, AHD/IP/CVBS/TVI/CVI, кодеки H.265X(H.264)/H.265/H.265+; 10/100 Мбит/с Ethernet порт;\n" +
            "\n" +
            "Только аналог: 4x5Mр (13 к/с), 8M-N (7 к/с);\n" +
            "Аналог+IP: 4x5Mп (13 к/с) + 4x5Mп (25 к/с);\n" +
            "Только IP: 16x5Mп (25 к/с), 16x1080P (25 к/с);\n" +
            "\n" +
            "аудио 4/1, облако XMeye, 1 SATA 3.5\" до 14Tб (в комплект не входит), БП 3А в комплекте;\n" +
            "Функции аналитики: Захват лица, детекция людей, детекция транспорта",
        features: ['Bluetooth', 'Пин-код', 'RFID'],
        warranty: 4
    },
    {
        id: 11,
        name: 'HVR-0805Np',
        category: category.AHD_VIDEO_RECORDER.category,
        subcategory: category.AHD_VIDEO_RECORDER.subcategory,
        price: 4700,
        image: hvr_0805Np,
        rating: 4.6,
        reviews: 89,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Видеорегистратор',
        description: "8 каналов, AHD/IP/CVBS/TVI/CVI/XVI, кодеки H.265, H.265+, H.265X(H.264).\n" +
            "\n" +
            "Только аналог: 8x5M-N (12к/с),\n" +
            "Аналог+IP: 8x5M-N (12к/с) + 4x1080P (25к/с);\n" +
            "Только IP: 16x5M (25к/с), 16х1080Р (25к/с);\n" +
            "\n" +
            "аудио 1/1, 1 SATA 3.5\" до 14Tб (в комплект не входит), облачный сервис XMeye, БП 3А в комплекте. Пластиковый корпус.\n" +
            "\n" +
            "Функции аналитики*: Захват лица, детекция людей, детекция транспорта",
        features: ['2 жилы', 'Коаксиал', '100м бухта'],
        warranty: 9
    },
    {
        id: 12,
        name: 'HVR-1605N',
        category: category.AHD_VIDEO_RECORDER.category,
        subcategory: category.AHD_VIDEO_RECORDER.subcategory,
        price: 14900,
        image: hvr_0805N,
        rating: 4.7,
        reviews: 154,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        description: "16 каналов, AHD/IP/CVBS/TVI/CVI, кодеки H.265/H.265+/H.265X(H.264).\n" +
            "\n" +
            "Только аналог: 16х5M-N (6 к/с), 16х1080N (16 к/с);\n" +
            "Аналог+IP: 16x5M-N + 4x1080P (25 к/с);\n" +
            "Только IP: 16х1080P (25 к/с), 8х5M (25 к/с);\n" +
            "\n" +
            "Аудио 1/1,  1 SATA 3.5\" до 14Тб (в комплект не входит), облако XMeye, БП 3А в комплекте, вентилятор.\n" +
            "\n" +
            "Функции аналитики: Захват лица, Детекция людей, Детекция автотранспорта",
        type: 'Видеорегистратор',
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 7
    },

    {
        id: 13,
        name: 'IP-202 FPM (3.6) 1H',
        category: category.IP_CAMS_2MP.category,
        subcategory: category.IP_CAMS_2MP.subcategory,
        price: 1463,
        image: ip_202_FPM,
        rating: 4.9,
        reviews: 182,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Купольная внутренняя камера 2 MP, CMOS, фиксированный объектив 3,6 мм, 1920 x 1080 (25 к/с),  H.265/H.264, -20°C +50°C, подсветка до 20 м (3 ИК-диода с линзами), POE, встроенный микрофон. Материал корпуса - пластик.\n",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 8
    },

    {
        id: 14,
        name: 'IP-202 FPM (2.8) 1H',
        category: category.IP_CAMS_2MP.category,
        subcategory: category.IP_CAMS_2MP.subcategory,
        price: 1463,
        image: ip_202_2_8FPM,
        rating: 4.2,
        reviews: 120,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Купольная внутренняя камера 2 MP, CMOS, фиксированный объектив 2,8 мм, 1920 x 1080 (25 к/с),  H.265/H.264, -20°C +50°C, подсветка до 20 м (3 ИК-диода с линзами), POE, встроенный микрофон. Материал корпуса - пластик.\n",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 1
    },

    {
        id: 15,
        name: 'IP-206',
        category: category.IP_CAMS_2MP.category,
        subcategory: category.IP_CAMS_2MP.subcategory,
        price: 1320,
        image: ip_206,
        rating: 4.6,
        reviews: 199,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Компактная IP камера с Wi-Fi, 2 MP, объектив 3,6 мм, облако Xmeye/ICSEE, микрофон и динамик, слот для карты памяти, материал корпуса - пластик. ",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 2
    },

    {
        id: 16,
        name: 'IP-PT206',
        category: category.IP_CAMS_2MP.category,
        subcategory: category.IP_CAMS_2MP.subcategory,
        price: 1725,
        image: ip_pt206,
        rating: 4.5,
        reviews: 101,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Компактная поворотная IP видеокамера c разрешением 2 MP.\n" +
            "Предназначена для круглосуточного внутреннего наблюдения, оснащена слотом для карт памяти micro SD, ИК-подсветкой и механическим ИК-фильтром для работы ночью, микрофоном и динамиком для организации двусторонней связи.\n" +
            "Обзор 350° и наклон 82° позволяет организовать панорамное наблюдение.\n" +
            "Простота настройки и доступ к камерам из любой точки мира предоставляется бесплатным облачным сервисом XMEYE, ICSEE, XMEYE PRO.",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 3
    },

    {
        id: 17,
        name: 'IP-302 FPM (2.8) 1',
        category: category.IP_CAMS_3MP.category,
        subcategory: category.IP_CAMS_3MP.subcategory,
        price: 14900,
        image: ip_302_FPM,
        rating: 4.3,
        reviews: 160,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Уличная купольная камера 3Мр, 1/2.8\" CMOS,  H.264/H.264+/H.265/H.265+/JPEG, фиксированный объектив 2,8 мм, угол обзора 95°, 3 Мп (20 к/с), 1920x1080 (20 к/с), облако Xmeye, IPEYE, -45°C +50°C, ИК-подсветка до 25 м, видимая подсветка до 10м, встроенный микрофон, металл/пластик\n" +
            "Функции аналитики: Детекция лица*, пересечение линии, вторжение в область (выход из области)",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 4
    },

    {
        id: 18,
        name: 'IP-302 FPM (2.8) 1V',
        category: category.IP_CAMS_3MP.category,
        subcategory: category.IP_CAMS_3MP.subcategory,
        price: 2400,
        image: ip_302_FPM_1V,
        rating: 4.4,
        reviews: 193,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Уличная купольная камера 3 MP, 1/2.9\" CMOS,  H.264/H.265/H.265+, фиксированный объектив 2,8 мм, угол обзора 90°, 3 MP (25 к/с), 1920x1080 (25 к/с), облако VideoLink, -45°C +50°C, подсветка до 30 м (18 SMD ИК диодов), встроенный микрофон, металлический герметичный корпус.",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 5
    },

    {
        id: 19,
        name: 'IP-402 FPM (2.8) 1',
        category: category.IP_CAMS_4MP.category,
        subcategory: category.IP_CAMS_4MP.subcategory,
        price: 2250,
        image: ip_402_FPM_2_8,
        rating: 4.8,
        reviews: 184,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Уличная купольная камера 4Мр, 1/2.8\" CMOS,  H.265/H.265+/H.265X (H.264) (скриншоты JPEG), фиксированный объектив 2,8 мм, угол обзора 90°, 4 Мп (18 к/с), 1920x1080 (25к/с), облако Xmeye, IPEYE, -45°C +50°C, ИК-подсветка до 25 м, видимая подсветка до 10м, PoE, встроенный микрофон, металл/пластик\n" +
            "Функции аналитики: Детекция лица*, пересечение линии, вторжение в область (выход из области).",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 2
    },

    {
        id: 20,
        name: 'IP-402 FPA (2.8) 1',
        category: category.IP_CAMS_4MP.category,
        subcategory: category.IP_CAMS_4MP.subcategory,
        price: 3300,
        image: ip_402_FPA_2_8,
        rating: 4.6,
        reviews: 148,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Купольная уличная камера 4 Мр, 1/2.8’’ CMOS, фиксированный объектив 2,8 мм, угол обзора 90°, 4 MP (18 к/с),  H.265/H.265+/H.265X (H.264)/JPEG, -45°C +50°C, облако XMeye, подсветка до 25 м (18 SMD-ИК диодов), POE, линейный аудиовход, корпус - металлический, герметичный.\n" +
            "Функции аналитики: Детекция лица**, пересечение линии, вторжение в область (выход из области)",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 9
    },

    {
        id: 21,
        name: 'IP-403 VPA (2.8-12) 1',
        category: category.IP_CAMS_4MP.category,
        subcategory: category.IP_CAMS_4MP.subcategory,
        price: 5385,
        image: ip_403_VPA_2_8,
        rating: 4.1,
        reviews: 165,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Камера',
        description: "Цилиндрическая уличная камера 4 MP, 1/2.9\" CMOS, H.265/H.265+/H.265X (H.264), вариофокальный объектив 2,8 - 12 мм, угол обзора 95°-24.5°, 4 MP (18 к/с), 1920x1080 (25 к/с), -45°C +50°C, подсветка до 60 м (8 ИК-диодов с линзами), PoE, облако Xmeye.\n" +
            "Функции аналитики: Определение лица*, пересечение линии, вторжение в область (выход из области)\n" +
            "* Полноценно функционирует с IP-видеорегистраторами на платформе XM",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 8
    },

    {
        id: 22,
        name: 'PoE-удлинитель',
        category: category.NETWORK_EQUIPMENT.category,
        subcategory: category.NETWORK_EQUIPMENT.subcategory,
        price: 1010,
        image: poe_udl,
        rating: 4.2,
        reviews: 124,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Оборудование',
        description: "Пассивное устройство для увеличения дальности передачи данных и питания по сети Ethernet до IP-видеокамер по кабелю витой пары. 1 вх. на 2 вых.",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 6
    },

    {
        id: 23,
        name: 'PoE-удлинитель (30Вт) 1/3',
        category: category.NETWORK_EQUIPMENT.category,
        subcategory: category.NETWORK_EQUIPMENT.subcategory,
        price: 750,
        image: poe_udl30VT,
        rating: 4.1,
        reviews: 122,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Оборудование',
        description: "Активное устройство для увеличения дальности передачи данных и питания по сети Ethernet до IP-видеокамер по кабелю витой пары. RJ-45 вх. - 1, RJ-45 вых. - 3(активные)",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 4
    },

    {
        id: 24,
        name: 'PoE-инжектор (пассивный)',
        category: category.NETWORK_EQUIPMENT.category,
        subcategory: category.NETWORK_EQUIPMENT.subcategory,
        price: 668,
        image: poe_inj,
        rating: 4.4,
        reviews: 122,
        isNew: true,
        inStock: true,
        brand: brands.AKSILIUM.name,
        type: 'Оборудование',
        description: "10/100M, IEEE802.3af/at, 30Вт пассивный\n" +
            "выход: RJ-45 (РоЕ) DC 48V, вход: RJ-45; AC 100-240V\n" +
            "встроенный блок питания",
        features: ['Громкая связь', 'Регулировка звука', 'Простота установки'],
        warranty: 2
    },
];

const categories = [
    { id: 'all', name: 'Все товары' },
    { id: category.IP_VIDEO_RECORDER.category, name: category.IP_VIDEO_RECORDER.category },
    { id: category.IP_VIDEO_RECORDER_POE.category, name: category.IP_VIDEO_RECORDER_POE.category },
    { id: category.AHD_VIDEO_RECORDER.category, name: category.AHD_VIDEO_RECORDER.category },
    { id: category.IP_CAMS_2MP.category, name: category.IP_CAMS_2MP.category },
    { id: category.IP_CAMS_3MP.category, name: category.IP_CAMS_3MP.category },
    { id: category.IP_CAMS_4MP.category, name: category.IP_CAMS_4MP.category },
    { id: category.NETWORK_EQUIPMENT.category, name: category.NETWORK_EQUIPMENT.category },
];

const sortOptions = [
    { id: 'popular', name: 'Популярные' },
    { id: 'newest', name: 'Новинки' },
    { id: 'price_asc', name: 'Цена: по возрастанию' },
    { id: 'price_desc', name: 'Цена: по убыванию' },
    { id: 'rating', name: 'По рейтингу' },
    { id: 'warranty', name: 'По гарантии' }
];

const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState(allProducts);
    const [filteredProducts, setFilteredProducts] = useState(allProducts);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Состояния фильтров
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [inStockOnly, setInStockOnly] = useState(false);
    const [sortBy, setSortBy] = useState(searchParams.get('sort') || 'popular');
    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');

    // Уникальные бренды и типы для фильтров
    const allBrands = [...new Set(allProducts.flatMap(p => p.brand ? [p.brand] : []))];
    const allTypes = [...new Set(allProducts.flatMap(p => p.type ? [p.type] : []))];

    // Применение фильтров
    useEffect(() => {
        let result = [...products];

        // Поиск
        if (searchQuery) {
            result = result.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Категория
        if (selectedCategory !== 'all') {
            result = result.filter(p => p.category === selectedCategory);
        }

        // Цена
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Бренды
        if (selectedBrands.length > 0) {
            result = result.filter(p =>
                p.brand && selectedBrands.includes(p.brand)
            );
        }

        // Типы устройств
        if (selectedTypes.length > 0) {
            result = result.filter(p =>
                p.type && selectedTypes.includes(p.type)
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
                case 'warranty':
                    return (b.warranty || 0) - (a.warranty || 0);
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
    }, [selectedCategory, priceRange, selectedBrands, selectedTypes, inStockOnly, sortBy, searchQuery, products]);

    const handleBrandToggle = (brand) => {
        setSelectedBrands(prev =>
            prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
        );
    };

    const handleTypeToggle = (type) => {
        setSelectedTypes(prev =>
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
        );
    };

    const clearFilters = () => {
        setSelectedCategory('all');
        setPriceRange([0, 100000]);
        setSelectedBrands([]);
        setSelectedTypes([]);
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
                        <h1 className={styles.hero_title}>Каталог систем безопасности</h1>
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
                                placeholder="Поиск по названию, категории или бренду..."
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
                        {(selectedBrands.length > 0 || selectedTypes.length > 0 || inStockOnly || selectedCategory !== 'all') && (
                            <span className={styles.filter_badge}>
                {selectedBrands.length + selectedTypes.length + (inStockOnly ? 1 : 0) + (selectedCategory !== 'all' ? 1 : 0)}
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
                            <h4 className={styles.filter_section_title}>Категории оборудования</h4>
                            <div className={styles.category_list}>
                                {categories.map(cat => (
                                    <button
                                        key={cat.id}
                                        className={`${styles.category_btn} ${selectedCategory === cat.id ? styles.active : ''}`}
                                        onClick={() => setSelectedCategory(cat.id)}
                                    >
                                        <span>{cat.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Цена */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Цена, ₽</h4>
                            <div className={styles.price_range}>
                                <div className={styles.price_inputs}>
                                    <input
                                        type="number"
                                        value={priceRange[0]}
                                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                                        className={styles.price_input}
                                        placeholder="от 0"
                                    />
                                    <span>—</span>
                                    <input
                                        type="number"
                                        value={priceRange[1]}
                                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                        className={styles.price_input}
                                        placeholder="до 100000"
                                    />
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100000"
                                    step="1000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                                    className={styles.price_slider}
                                />
                            </div>
                        </div>

                        {/* Бренды */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Производитель</h4>
                            <div className={styles.checkbox_group}>
                                {allBrands.map(brand => (
                                    <label key={brand} className={styles.checkbox_label}>
                                        <input
                                            type="checkbox"
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandToggle(brand)}
                                            className={styles.checkbox}
                                        />
                                        <span>{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Тип устройства */}
                        <div className={styles.filter_section}>
                            <h4 className={styles.filter_section_title}>Тип устройства</h4>
                            <div className={styles.checkbox_group}>
                                {allTypes.map(type => (
                                    <label key={type} className={styles.checkbox_label}>
                                        <input
                                            type="checkbox"
                                            checked={selectedTypes.includes(type)}
                                            onChange={() => handleTypeToggle(type)}
                                            className={styles.checkbox}
                                        />
                                        <span>{type}</span>
                                    </label>
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
                                <h3>Оборудование не найдено</h3>
                                <p>Попробуйте изменить параметры фильтрации или поиска</p>
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

export default Catalog;