import { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';

import { Container, Title } from './styles';
import { CardsProducts } from '../CardsProducts';
import { formatPrice } from '../../utils/FormattPrice';

export const ProductsCarousel = () => {
  const [products, setProducts] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 690 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 690, min: 0 },
      items: 2,
    },
  };

  useEffect(() => {
    const loadingProducts = async () => {
      const { data } = await api.get('/products');

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => ({
          currencyFormatt: formatPrice(product.price),
          ...product,
        }));

      setProducts(onlyOffers);
    };

    loadingProducts();
  }, []);

  return (
    <Container>
      <Title>Offers of the day</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="sliders-carousel"
      >
        {products.map((product) => (
          <CardsProducts key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
};
