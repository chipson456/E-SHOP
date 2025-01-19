import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { addToCart } from '../../store/slices/cartSlice';
import { addToWishlist } from '../../store/slices/wishlistSlice';
import styled from 'styled-components';
import { fadeIn, pulse } from '../../styles/animations';

const StyledCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.5s ease-out;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.1);
  }

  .add-to-cart-btn {
    transition: all 0.3s ease;
    &:hover {
      animation: ${pulse} 0.5s ease-in-out;
    }
  }
`;

const ProductImage = styled(CardMedia)`
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.substring(0, 100)}...
        </Typography>
        <Box mt={2}>
          <Button 
            variant="contained" 
            onClick={() => dispatch(addToCart(product))}
            fullWidth
            sx={{ mb: 1 }}
          >
            Add to Cart
          </Button>
          <Button 
            variant="outlined"
            onClick={() => dispatch(addToWishlist(product))}
            fullWidth
          >
            Add to Wishlist
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
