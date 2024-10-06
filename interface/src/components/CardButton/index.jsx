import CartButton from '../../assets/cart.svg';

import { ButtonContainer } from './styles';

export function CardButton({ ...props }) {
  return (
    <ButtonContainer {...props}>
      <img src={CartButton} alt="cart-logo" />
    </ButtonContainer>
  );
}
