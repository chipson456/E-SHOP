import axios from 'axios';

const api = axios.create({
  baseURL: API_URL || 'http://localhost:5000/api'});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchProducts = () => api.get('/products');
export const fetchProduct = (id) => api.get(`/products/${id}`);
export const fetchCategories = () => api.get('/products/categories');
export const createOrder = (orderData) => api.post('/orders', orderData);

export default api;

const API_URL = 'https://e-shop-pgla.vercel.app/';
