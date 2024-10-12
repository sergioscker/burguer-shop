import { useNavigate, useResolvedPath } from 'react-router-dom';
import { UserCircle, ShoppingCart } from '@phosphor-icons/react';

import { useUser } from '../../hooks/UsersContext';

import {
  CartContainer,
  Container,
  Content,
  LinksHeader,
  Logout,
  Navigation,
  Options,
  Profile,
} from './styles';

export function Header() {
  const navigate = useNavigate();
  const { pathname } = useResolvedPath();
  const { logout, userInfo } = useUser();

  function logoutUser() {
    logout();

    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <LinksHeader to="/" $isActive={pathname === '/'}>
              Home
            </LinksHeader>
            <hr></hr>
            <LinksHeader to="/menus" $isActive={pathname === '/menus'}>
              Menus
            </LinksHeader>
          </div>
        </Navigation>

        <Options>
          <Profile>
            <UserCircle color="#fff" size={28} />
            <div>
              <p>
                Olá, <span>{userInfo.name}</span>
              </p>

              <Logout onClick={logoutUser}>Logout</Logout>
            </div>
          </Profile>

          <CartContainer>
            <ShoppingCart color="#fff" size={28} />
            <LinksHeader to="/cart">Cart</LinksHeader>
          </CartContainer>
        </Options>
      </Content>
    </Container>
  );
}
