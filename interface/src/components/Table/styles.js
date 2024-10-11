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
    overflow-x: auto;
    border-radius: 8px;
  }
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

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
  }
`;

export const Body = styled.tbody``;
