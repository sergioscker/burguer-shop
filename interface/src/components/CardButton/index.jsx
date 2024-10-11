import CartButton from '../../assets/cart.svg';

import { ButtonContainer } from './styles';

export function CartButton({ ...props }) {
  return (
    <ButtonContainer {...props}>
      <img src={CartButton} alt="cart-logo" />
    </ButtonContainer>
  );
}
