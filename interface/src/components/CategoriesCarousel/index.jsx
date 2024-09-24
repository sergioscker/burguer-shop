import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export const CategoriesCarousel = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const { data } = await api.get('/categories');

      setcategories(data);
      console.log(data);
    };

    loadCategories;
  }, []);

  return (
    <div>
      <h1>Categories</h1>
    </div>
  );
};
