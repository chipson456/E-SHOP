import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CheckoutForm = styled(Paper)`
  padding: 2rem;
  margin-top: 2rem;
`;

const Checkout = () => {
  const { total } = useSelector(state => state.cart);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <CheckoutForm>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </Grid>
            {/* Add more form fields */}
          </Grid>
          <Typography variant="h6" sx={{ mt: 2 }}>Total: ${total}</Typography>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ mt: 3 }}
          >
            Place Order
          </Button>
        </form>
      </CheckoutForm>
    </Container>
  );
};

export default Checkout;
