import React from 'react';
import { Container, Typography, Stepper, Step, StepLabel } from '@mui/material';
import CartList from '../components/cart/CartList';
import { useSelector } from 'react-redux';

const steps = ['Shopping Cart', 'Shipping Details', 'Payment'];

const Cart = () => {
  const { items, total } = useSelector(state => state.cart);
  const activeStep = 0;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <CartList />
    </Container>
  );
};

export default Cart;
