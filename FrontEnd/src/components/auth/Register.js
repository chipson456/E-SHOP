import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const RegisterContainer = styled(Paper)`
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration
  };

  return (
    <RegisterContainer>
      <Typography variant="h5" gutterBottom>Register</Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Register
        </Button>
      </form>
    </RegisterContainer>
  );
};

export default Register;
