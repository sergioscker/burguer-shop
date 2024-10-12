import { useNavigate } from 'react-router-dom';

import { ProductsCarousel, CategoriesCarousel } from '../../components';
import { useUser } from '../../hooks/UsersContext';

import { Banner, Login, Container, MainContainer } from './styles';

export function Home() {
  const navigate = useNavigate();
  const { userInfo } = useUser();

  // Verifica se o usuário está logado
  const isAuthenticated = Boolean(Object.keys(userInfo).length);

  function handleLoginRedirect() {
    navigate('/login');
  }

  return (
    <MainContainer>
      <Banner>
        <div>
          <h1>Welcome!</h1>

          {/* Exibe o botão de login somente se o usuário não estiver logado */}
          {!isAuthenticated && (
            <Login onClick={handleLoginRedirect}>Login</Login>
          )}
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
