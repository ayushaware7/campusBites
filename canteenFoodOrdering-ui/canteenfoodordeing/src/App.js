import LandingPage from './components/Landingpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import MenuPage from './components/MenuPage';
import About from './components/About';
import TodaySpecial from './components/TodaySpecial';
import CheckoutPage from './components/CheckoutPage';
import CartPage from './components/CartPage'; // Changed from CartPopup to CartPage
import { CartProvider } from './components/CartContext';
import Admin from './components/Admin';
import Snacks from './components/Snacks';
import Breakfast from './components/Breakfast';
import Lunch from './components/Lunch';
import Beverages from './components/Beverages';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/menu" element={<MenuPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/specials" element={<TodaySpecial/>}/>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/beverages" element={<Beverages />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;