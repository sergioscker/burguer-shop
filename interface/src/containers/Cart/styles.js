import styled from 'styled-components';

import Background from '../../assets/background.svg';
import Texture from '../../assets/texture.svg';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  smallLaptop: '1024px',
  desktop: '1280px',
};

export const Container = styled.div`
  background: url('${Background}') center/contain;
  background-color: #1e1e1e;
  width: 100%;
  min-height: 100vh;
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('${Texture}');
  background-color: #1f1f1f;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 180px;

  img {
    max-height: 140px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 140px;

    img {
      max-height: 100px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  padding-bottom: 12px;
  color: #61a120;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    left: calc(50% - 28px);
    content: '';
    width: 56px;
    height: 4px;
    background-color: #61a120;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;

    &::after {
      left: calc(50% - 20px);
      width: 40px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 30px;
  max-width: 80%;
  padding: 40px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.smallLaptop}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px;
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 20px;
  }
`;
