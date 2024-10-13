import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  cursor: grab;

  .sliders-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding-top: 20px;
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 60px;
    top: 50px;
    background-color: #9758a6;

    @media (max-width: 768px) {
      left: 30px;
      top: 40px;
    }

    @media (max-width: 480px) {
      left: 20px;
      top: 30px;
    }
  }

  .react-multiple-carousel__arrow--right {
    right: 60px;
    top: 50px;
    background-color: #9758a6;

    @media (max-width: 768px) {
      right: 30px;
      top: 40px;
    }

    @media (max-width: 480px) {
      right: 20px;
      top: 30px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: #9758a6;
  padding-bottom: 12px;
  position: relative;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    background-color: #9758a6;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;

    &::after {
      width: 40px;
      height: 3px;
    }
  }
`;

export const ItensContent = styled.div`
  background: url('${(props) => props.$imageURL}');
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  width: 80%;
  height: 250px;

  @media (max-width: 1024px) {
    width: 90%;
    height: 220px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

export const CategoryButton = styled(Link)`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  margin-top: 50px;
  text-align: center;

  &:hover {
    background-color: #9758a6;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 8px 25px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 6px 20px;
    margin-top: 30px;
  }
`;
