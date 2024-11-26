import { useContext, createContext, useState, useEffect } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductInCart = [];

    if (cartIndex >= 0) {
      newProductInCart = cartProducts;

      newProductInCart[cartIndex].quantity += 1;

      setCartProducts(newProductInCart);
    } else {
      product.quantity = 1;

      newProductInCart = [...cartProducts, product];

      setCartProducts(newProductInCart);

      updateLocalStorage(newProductInCart);
    }
  };

  const clearCart = () => {
    setCartProducts([]);

    updateLocalStorage([]);
  };

  const deleteItens = (productId) => {
    const updateCart = cartProducts.filter((prd) => prd.id !== productId);

    setCartProducts(updateCart);

    updateLocalStorage(updateCart);
  };

  const increaseProduct = (productId) => {
    const addProductCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd;
    });

    setCartProducts(addProductCart);
    updateLocalStorage(addProductCart);
  };

  const decreaseProduct = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const deleteProductCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });
      setCartProducts(deleteProductCart);
      updateLocalStorage(deleteProductCart);
    } else {
      deleteItens(productId);
    }
  };

  const updateLocalStorage = (products) => {
    localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
  };

  useEffect(() => {
    const clientCartData = localStorage.getItem('devburger:cartInfo');

    if (clientCartData) {
      setCartProducts(JSON.parse(clientCartData));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteItens,
        decreaseProduct,
        increaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with a context');
  }

  return context;
};
