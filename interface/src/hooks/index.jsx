import { CartProvider } from './CartContext';
import { UserProvider } from './UsersContext';

export const AppProvider = ({ children }) => {
  return (
    <UserProvider>
      <CartProvider>{children}</CartProvider>
    </UserProvider>
  );
};
