import styled from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  smallLaptop: '1024px',
  desktop: '1280px',
};

export const Root = styled.table`
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 20px;
  width: 100%;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    border-radius: 8px;
  }
`;

export const Header = styled.thead`
  @media (max-width: ${breakpoints.mobile}) {
    display: none; /* Ocultar o cabeçalho da tabela em mobile */
  }
`;

export const Tr = styled.tr`
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    margin-bottom: 16px; /* Espaço entre "linhas" da tabela */
  }
`;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  color: #fff;
  background-color: #484848;
  border-bottom: 1px solid #cdcdcd;

  &:last-child {
    border-top-right-radius: 20px;
  }

  &:first-child {
    border-top-left-radius: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    padding: 12px;
    display: none; /* Ocultar o cabeçalho de cada célula em mobile */
  }
`;

export const Td = styled.td`
  padding: 16px;
  color: #484848;
  font-weight: 500;
  line-height: 115%;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    padding: 12px;
    display: block;
    text-align: left;
    position: relative;
    padding-left: 50%; /* Espaço para a label de cada campo */

    /* Exibir a label da coluna (nome do campo) em dispositivos móveis */
    &::before {
      content: attr(data-label); /* Usa o valor de "data-label" como título */
      position: absolute;
      left: 16px;
      top: 12px;
      white-space: nowrap;
      font-weight: 600;
      color: #484848;
    }
  }
`;

export const Body = styled.tbody`
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;
