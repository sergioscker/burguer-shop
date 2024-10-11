import styled from 'styled-components';
import BannerMenu from '../../assets/banner-menu.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  smallLaptop: '1024px',
  desktop: '1280px',
};

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
  overflow: hidden;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;
  width: 100%;
  background: url('${BannerMenu}') no-repeat;
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  position: relative;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Road Rage', sans-serif;
    padding: 25px;
    font-size: 80px;
    line-height: 65px;
    color: #f4f4f4;
    position: absolute;
    right: 30%;
    top: 10%;

    span {
      display: block;
      font-size: 20px;
      color: #fff;
    }
  }

  @media (max-width: ${breakpoints.smallLaptop}) {
    min-height: 400px;

    h1 {
      font-size: 50px;
      line-height: 45px;
      right: 15%;
      top: 5%;

      span {
        font-size: 18px;
      }
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    min-height: 400px;

    h1 {
      font-size: 50px;
      line-height: 45px;
      right: 15%;
      top: 5%;

      span {
        font-size: 18px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-height: 300px;

    h1 {
      font-size: 36px;
      line-height: 30px;
      right: 5%;
      top: 30%;
      padding: 10px;

      span {
        font-size: 15px;
      }
    }
  }
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const ButtonCategory = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  background: none;
  color: ${(props) => (props.$isActiveCategory ? '#9758a6' : '#696969')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${(props) => props.$isActiveCategory && '3px solid #9758a6'};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;

  @media (max-width: ${breakpoints.smallLaptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 20px;
    margin: 20px auto;
  }
`;
