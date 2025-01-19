import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import styled from 'styled-components';

const LoginContainer = styled(Paper)`
  padding: 2rem;
  max-width: 400px;
  margin: 2rem auto;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch login action
  };

  return (
    <LoginContainer>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
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
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Login
        </Button>
      </form>
    </LoginContainer>
  );
};

export default Login;
