import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import { addToCart } from '../../store/slices/cartSlice';
import styled from 'styled-components';

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // In a real app, fetch product details using the id

  const product = {
    // Placeholder data
    title: 'Product Title',
    price: 99.99,
    description: 'Product description',
    image: 'product-image-url'
  };

  return (
    <Container>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <ProductImage src={product.image} alt={product.title} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>{product.title}</Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Box mt={3}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => dispatch(addToCart(product))}
              sx={{ mr: 2 }}
            >
              Add to Cart
            </Button>
            <Button variant="outlined" size="large">
              Add to Wishlist
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
