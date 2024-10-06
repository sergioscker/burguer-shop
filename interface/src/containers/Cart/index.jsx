import Logo from '../../assets/logo-login.svg';

import { ItensCart, CartSummary } from '../../components';

import { Banner, Container, Content, Title } from './styles';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={Logo} alt="logo devburger" />
      </Banner>

      <Title>Order - Checkout</Title>

      <Content>
        <ItensCart />
        <CartSummary />
      </Content>
    </Container>
  );
}
