import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/CartContext';

import { api } from '../../services/api';

import { formatPrice } from '../../utils/FormattPrice';

import { Button } from '../Button';
import { Container } from './styles';

export function CartSummary() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryFee] = useState(500);
  const navigate = useNavigate();

  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllItens = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItens);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });

      navigate('/checkout', {
        state: data,
      });
    } catch (err) {
      toast.error('Error, please try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div>
      <Container>
        <div className="top-container">
          <h2 className="title">Order summary</h2>

          <p className="itens">Itens</p>
          <p className="price-itens">{formatPrice(finalPrice)}</p>
          <p className="delivery-fee">Delivery fee</p>
          <p className="price-fee-delivery">{formatPrice(deliveryFee)}</p>
        </div>

        <div className="bottom-container">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryFee)}</p>
        </div>
      </Container>
      <Button onClick={submitOrder}>Finalize order</Button>
    </div>
  );
}
