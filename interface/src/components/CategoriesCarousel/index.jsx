import { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { api } from '../../services/api';

import { CategoryButton, Container, ItensContent, Title } from './styles';
import { useNavigate } from 'react-router-dom';

export const CategoriesCarousel = () => {
  const [categories, setcategories] = useState([]);
  const navigate = useNavigate();

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
    const loadingCategories = async () => {
      const { data } = await api.get('/categories');

      setcategories(data);
    };

    loadingCategories();
  }, []);

  return (
    <Container>
      <div>
      <Title>Categories</Title>
      </div>
      
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        itemClass="sliders-carousel"
      >
        {categories.map((category) => (
          <ItensContent key={category.id} $imageURL={category.url}>
            <CategoryButton
              onClick={() =>
                navigate({
                  pathname: '/menus',
                  search: `?category=${category.id}`,
                })
              }
            >
              {category.name}
            </CategoryButton>
          </ItensContent>
        ))}
      </Carousel>
    </Container>
  );
};
