import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import App from './App';
import ShoppingCart from './components/shoppingCart.js'
const RouteSwitch = () => {
    return (
            <BrowserRouter>
            <div id='navBar'>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/cart'>Shopping Cart</Link>
                </nav>
            </div>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/cart' element={<ShoppingCart />} />
                </Routes>
            </BrowserRouter>
    )
};

export default RouteSwitch;