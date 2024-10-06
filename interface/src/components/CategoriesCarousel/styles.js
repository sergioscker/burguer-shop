import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  cursor: grab;

  .sliders-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
  }

  .react-multiple-carousel__arrow--left {
    left: 60px;
    top: 50px;
    background-color: #9758a6;
  }

  .react-multiple-carousel__arrow--right {
    right: 60px;
    top: 50px;
    background-color: #9758a6;
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
`;

export const CategoryButton = styled(Link)`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 22.5px;
  font-weight: 500;
  margin-top: 50px;

  &:hover {
    background-color: #9758a6;
  }
`;
