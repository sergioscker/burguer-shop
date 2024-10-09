import { createBrowserRouter } from 'react-router-dom';

import { Header, Footer } from '../components';

import {
  Cart,
  Checkout,
  CompletePayment,
  Home,
  Login,
  Menu,
  Register,
} from '../containers';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },

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
    path: '/register',
    element: <Register />,
  },

  {
    path: '/menus',
    element: (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    ),
  },

  {
    path: '/cart',
    element: <Cart />,
  },

  {
    path: '/checkout',
    element: <Checkout />,
  },

  {
    path: '/complete',
    element: <CompletePayment />,
  },
]);
