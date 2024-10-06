import { createBrowserRouter } from 'react-router-dom';

import { Header, Footer } from '../components';
import { Cart, Home, Login, Menu, Register } from '../containers';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/menus',
    element: <Menu />,
  },

  {
    path: '/cart',
    element: <Cart />,
  },
]);
