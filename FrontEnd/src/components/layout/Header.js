import React from 'react';
import { AppBar, Toolbar, Typography, Button, Badge, IconButton } from '@mui/material';
import { ShoppingCart, Favorite } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const wishlistItems = useSelector(state => state.wishlist.items);

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
          E-Shop
        </Typography>
        <NavLinks>
          <Button color="inherit" component={Link} to="/categories">
            Categories
          </Button>
          <IconButton color="inherit" component={Link} to="/wishlist">
            <Badge badgeContent={wishlistItems.length} color="secondary">
              <Favorite />
            </Badge>
          </IconButton>
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </NavLinks>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;