import { useCart } from '../../hooks/CartContext';
import { formatPrice } from '../../utils/FormattPrice';
import { Table } from '../index';

import TrashIcon from '../../assets/trash.svg';

import {
  ProductImage,
  GroupButton,
  TotalPrice,
  EmptyCart,
  TrashImage,
} from './styles';

export function ItensCart() {
  const { cartProducts, increaseProduct, decreaseProduct, deleteItens } =
    useCart();

  console.log(cartProducts);

  return (
    <Table.Root>
      <Table.Header>
        <Table.Tr>
          <Table.Th></Table.Th>
          <Table.Th>Itens</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Quantity</Table.Th>
          <Table.Th>Total</Table.Th>
          <Table.Th></Table.Th>
        </Table.Tr>
      </Table.Header>

      <Table.Body>
        {cartProducts?.length ? (
          cartProducts.map((product) => (
            <Table.Tr key={product.id}>
              <Table.Td data-label="Image">
                <ProductImage src={product.url} />
              </Table.Td>

              <Table.Td data-label="Item Name">{product.name}</Table.Td>

              <Table.Td data-label="Price">{product.currencyFormatt}</Table.Td>

              <Table.Td data-label="Quantity">
                <GroupButton>
                  <button onClick={() => decreaseProduct(product.id)}>-</button>
                  {product.quantity}
                  <button onClick={() => increaseProduct(product.id)}>+</button>
                </GroupButton>
              </Table.Td>

              <Table.Td data-label="Total">
                <TotalPrice>
                  {formatPrice(product.quantity * product.price)}
                </TotalPrice>
              </Table.Td>

              <Table.Td data-label="Remove">
                <TrashImage
                  src={TrashIcon}
                  alt="trash icon"
                  onClick={() => deleteItens(product.id)}
                />
              </Table.Td>
            </Table.Tr>
          ))
        ) : (
          <EmptyCart>Empty Cart</EmptyCart>
        )}
      </Table.Body>
    </Table.Root>
  );
}
