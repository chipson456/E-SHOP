import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from '../components/products/ProductList';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Latest Products</Typography>
      <ProductList products={products} />
    </Container>
  );
};

export default Home;
