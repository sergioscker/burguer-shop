import React from 'react';

import { ProductsCarousel, CategoriesCarousel } from '../../components';

import { Banner, Container } from './styles';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Welcome!</h1>
      </Banner>

      <Container>
        <div>
          <CategoriesCarousel />
          <ProductsCarousel />
        </div>
      </Container>
    </main>
  );
}
