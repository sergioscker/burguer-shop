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
    element: (
      <>
        <Login />
        <Footer />
      </>
    ),
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
    element: (
      <>
        <Register />
        <Footer />
      </>
    ),
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
    element: (
      <>
        <Header />
        <Cart />
        <Footer />
      </>
    ),
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
