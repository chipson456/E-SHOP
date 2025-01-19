import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  padding: 20px;
`;

const ProductList = ({ products }) => {
  return (
    <StyledGrid container spacing={3}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default ProductList;
