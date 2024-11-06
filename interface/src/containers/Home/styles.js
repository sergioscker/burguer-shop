import styled from 'styled-components';

import BannerHome from '../../assets/banner-home.svg';
import Background from '../../assets/background.svg';

const medias = {
  large: '(max-width: 1200px)',
  medium: '(max-width: 992px)',
  small: '(max-width: 768px)',
  xsmall: '(max-width: 576px)',
  xxsmall: '(max-width: 400px)',
};

export const MainContainer = styled.div`
  background: url('${Background}') center/contain;
  background-color: #1e1e1e;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('${BannerHome}') center/cover no-repeat;
  min-height: 480px;
  width: 100%;
  position: relative;

  h1 {
    font-family: 'Road Rage', sans-serif;
    font-size: 80px;
    color: #f4f4f4;
    position: absolute;
    right: 10%;
    top: 10%;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media ${medias.large} {
    h1 {
      font-size: 60px;
      right: 15%;
      top: 20%;
    }
  }

  @media ${medias.medium} {
    min-height: 400px;

    h1 {
      font-size: 50px;
      right: 15%;
      top: 20%;
    }
  }

  @media ${medias.small} {
    min-height: 300px;

    h1 {
      font-size: 40px;
      right: 15%;
      top: 20%;
    }
  }

  @media ${medias.xsmall} {
    min-height: 250px;
    h1 {
      font-size: 30px;
      right: 15%;
      top: 25%;
    }
  }

  @media ${medias.xxsmall} {
    min-height: 200px;
    h1 {
      font-size: 30px;
      right: 15%;
      top: 30%;
    }
  }
`;

export const Login = styled.button`
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;
  cursor: pointer;
  position: absolute;
  right: 14%;
  top: 25%;

  &:hover {
    background-color: #9758a6;
  }

  @media ${medias.small} {
    font-size: 12px;
  }
`;

export const Container = styled.section`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  @media ${medias.large} {
    padding: 15px;
  }

  @media ${medias.medium} {
    padding: 10px;
  }

  @media ${medias.small} {
    padding: 8px;
  }

  @media ${medias.xsmall} {
    padding: 5px;
  }

  @media ${medias.xxsmall} {
    padding: 2px;
  }
`;
