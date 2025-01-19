import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Grid } from '@mui/material';
import ProductCard from '../components/products/ProductCard';
import styled from 'styled-components';

const WishlistContainer = styled(Container)`
  padding-top: 2rem;
`;

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <WishlistContainer>
      <Typography variant="h4" gutterBottom>
        My Wishlist
      </Typography>
      <Grid container spacing={3}>
        {wishlistItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item._id}>
            <ProductCard product={item} />
          </Grid>
        ))}
        {wishlistItems.length === 0 && (
          <Typography variant="h6">Your wishlist is empty</Typography>
        )}
      </Grid>
    </WishlistContainer>
  );
};

export default Wishlist;
