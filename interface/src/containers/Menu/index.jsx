import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { formatPrice } from '../../utils/FormattPrice';
import { CardsProducts } from '../../components/CardsProducts';

import {
  Container,
  Banner,
  CategoriesMenu,
  ProductsContainer,
  ButtonCategory,
} from './styles';

export function Menu() {
  const [categories, setcategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryId = +queryParams.get('category');

    if (categoryId) {
      return categoryId;
    }
    return 0;
  });

  useEffect(() => {
    const loadingCategories = async () => {
      const { data } = await api.get('/categories');

      const newCategories = [{ id: 0, name: 'All' }, ...data];

      setcategories(newCategories);
    };

    const loadingProducts = async () => {
      const { data } = await api.get('/products');

      const newProducts = data.map((product) => ({
        currencyFormatt: formatPrice(product.price),
        ...product,
      }));

      setProducts(newProducts);
    };

    loadingCategories();
    loadingProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter(
        (product) => product.category_id === activeCategory,
      );

      setFilteredProducts(newFilteredProducts);
    }
  }, [products, activeCategory]);

  return (
    <Container>
      <Banner>
        <h1>
          The best
          <br />
          burger
          <br />
          is here!
          <span>This menu is irresistible!</span>
        </h1>
      </Banner>

      <CategoriesMenu>
        {categories.map((category) => (
          <ButtonCategory
            key={category.id}
            $isActiveCategory={category.id === activeCategory}
            onClick={() => {
              navigate(
                {
                  pathname: '/menus',
                  search: `?category=${category.id}`,
                },
                {
                  replace: true,
                },
              );

              setActiveCategory(category.id);
            }}
          >
            {category.name}
          </ButtonCategory>
        ))}
      </CategoriesMenu>

      <ProductsContainer>
        {filteredProducts.map((product) => (
          <CardsProducts product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </Container>
  );
}
