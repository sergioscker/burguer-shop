import React from 'react';

import { Banner, Container, Content } from './styles';
import { CategoriesCarousel } from '../../components/CategoriesCarousel';

export function Home() {
  return (
    <main>
      <Banner>
        <h1>Welcome!</h1>
      </Banner>

      <Container>
        <Content>
          <CategoriesCarousel />
          <div>Carrossel de Produtos</div>
        </Content>
      </Container>
    </main>
  );
}
