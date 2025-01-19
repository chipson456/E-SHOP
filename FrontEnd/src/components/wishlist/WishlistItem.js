import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Delete, ShoppingCart } from '@mui/icons-material';
import { removeFromWishlist } from '../../store/slices/wishlistSlice';
import { addToCart } from '../../store/slices/cartSlice';
import styled from 'styled-components';

const WishlistCard = styled(Card)`
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;

const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <WishlistCard>
      <img src={item.image} alt={item.title} style={{ width: 100, padding: 10 }} />
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography>${item.price}</Typography>
        <Box display="flex" gap={1} mt={1}>
          <IconButton onClick={() => dispatch(addToCart(item))}>
            <ShoppingCart />
          </IconButton>
          <IconButton onClick={() => dispatch(removeFromWishlist(item._id))}>
            <Delete />
          </IconButton>
        </Box>
      </CardContent>
    </WishlistCard>
  );
};

export default WishlistItem;
