import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import styled from 'styled-components';
import { slideIn } from '../../styles/animations';

const CartItemCard = styled(Card)`
  animation: ${slideIn} 0.3s ease-out;
  margin: 1rem 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item._id, quantity: newQuantity }));
    }
  };

  return (
    <CartItemCard>
      <img src={item.image} alt={item.title} style={{ width: 100, padding: 10 }} />
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography>${item.price}</Typography>
        <Box display="flex" alignItems="center" mt={1}>
          <IconButton onClick={() => handleQuantityChange(item.quantity - 1)}>
            <Remove />
          </IconButton>
          <Typography>{item.quantity}</Typography>
          <IconButton onClick={() => handleQuantityChange(item.quantity + 1)}>
            <Add />
          </IconButton>
          <IconButton onClick={() => dispatch(removeFromCart(item._id))}>
            <Delete />
          </IconButton>
        </Box>
      </CardContent>
    </CartItemCard>
  );
};

export default CartItem;
