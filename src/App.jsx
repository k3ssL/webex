import {BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import './styles/global.css';
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import UnderConstruction from "./pages/UnderConstruction/UnderConstruction";
import {useEffect} from "react";

const Layout = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);

    useEffect(() => {
        const redirectPath = localStorage.getItem('redirectPath');
        if (redirectPath) {
            localStorage.removeItem('redirectPath');
            // Используем setTimeout, чтобы избежать конфликтов с Router
            setTimeout(() => {
                window.location.replace(`/${redirectPath}`);
            }, 100);
        }
    }, []);
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/register" element={<Login />} />
                <Route path="/delivery" element={<UnderConstruction />} />
                <Route path="/returns" element={<UnderConstruction />} />
                <Route path="/faq" element={<UnderConstruction />} />
                <Route path="/privacy" element={<UnderConstruction />} />
                <Route path="/terms" element={<UnderConstruction />} />
            </Routes>
            <Footer />
            <Chat />
            </>
    )
}

function App() {
    return (
        <Router>
            <Layout/>
        </Router>
    )
}

export default App;