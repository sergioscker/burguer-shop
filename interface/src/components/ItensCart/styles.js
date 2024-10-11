import styled from 'styled-components';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  smallLaptop: '1024px',
  desktop: '1280px',
};

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    height: 60px;
    width: 60px;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: #fff;
    background-color: #9758a6;
    border-radius: 4px;
    transition: all 0.4s;
    border: none;

    &:hover {
      background-color: #6f357c;
    }

    @media (max-width: ${breakpoints.mobile}) {
      height: 24px;
      width: 24px;
    }
  }
`;

export const TotalPrice = styled.p`
  font-weight: bold;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 18px;
    padding: 10px;
    margin-left: 10px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
    padding: 10px;
    margin-left: 10px;
  }
`;

export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    height: 18px;
    width: 18px;
  }
`;
