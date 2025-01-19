import React, { useState, useEffect } from 'react';
import { Container, Typography, Tabs, Tab, Box } from '@mui/material';
import ProductList from '../components/products/ProductList';
import axios from 'axios';
import styled from 'styled-components';


const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://fakestoreapi.com/products/categories');
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${categories[selectedCategory]}`);
      setProducts(response.data);
    };
    if (categories.length > 0) {
      fetchProducts();
    }
  }, [selectedCategory, categories]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Categories</Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedCategory} onChange={(e, newValue) => setSelectedCategory(newValue)}>
          {categories.map((category, index) => (
            <Tab key={category} label={category} />
          ))}
        </Tabs>
      </Box>
      <ProductList products={products} />
    </Container>
  );
};

export default Categories;

const CategoryContainer = styled.div`
  .category-transition {
    transition: all 0.5s ease;
    opacity: 0;
    transform: translateY(20px);
  }

  .category-transition-enter {
    opacity: 1;
    transform: translateY(0);
  }
`;
