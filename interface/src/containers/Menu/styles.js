import styled from 'styled-components';

import BannerMenu from '../../assets/banner-menu.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  /* background-position: center;
  background-size: cover; */
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('${Background}');
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
`;

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 30px;
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
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  padding: 40px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto;
`;
