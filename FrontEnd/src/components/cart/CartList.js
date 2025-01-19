import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Typography, Button, Box } from '@mui/material';
import styled from 'styled-components';

const CartContainer = styled(Box)`
  padding: 2rem;
`;

const CartList = () => {
  const { items, total } = useSelector(state => state.cart);

  return (
    <CartContainer>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      {items.map(item => (
        <CartItem key={item._id} item={item} />
      ))}
      <Box mt={3}>
        <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Proceed to Checkout
        </Button>
      </Box>
    </CartContainer>
  );
};

export default CartList;
