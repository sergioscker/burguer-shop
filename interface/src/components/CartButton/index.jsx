import Cart from '../../assets/cart.svg';

import { ButtonContainer } from './styles';

export function CartButton({ ...props }) {
  return (
    <ButtonContainer {...props}>
      <img src={Cart} alt="cart-logo" />
    </ButtonContainer>
  );
}
