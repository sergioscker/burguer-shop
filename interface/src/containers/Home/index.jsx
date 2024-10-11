import { useNavigate } from 'react-router-dom';

import { ProductsCarousel, CategoriesCarousel } from '../../components';

import { MainContainer, Banner, Login, Container } from './styles';
import { useUser } from '../../hooks/UsersContext';
import { useState } from 'react';

export function Home() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [userLogin, setLogin] = useState('');

  function handleClose() {
    login(userLogin);

    navigate('/login');
    [setLogin];
  }

  return (
    <MainContainer>
      <Banner>
        <div>
          <h1>Welcome!</h1>

          <Login onClick={handleClose}>Login</Login>
        </div>
      </Banner>

      <Container>
        <div>
          <CategoriesCarousel />
          <ProductsCarousel />
        </div>
      </Container>
    </MainContainer>
  );
}
