import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Layout from './components/layout/layout';
import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductDetails from './components/products/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Wishlist from './pages/Wishlist';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
