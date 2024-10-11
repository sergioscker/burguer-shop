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

export const Banner = styled.div`
  background: url('${BannerHome}') center/cover;
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

  @media ${medias.large} {
    h1 {
      font-size: 60px;
      right: 8%;
    }
  }

  @media ${medias.medium} {
    min-height: 400px;

    h1 {
      font-size: 50px;
      right: 5%;
      top: 15%;
    }
  }

  @media ${medias.small} {
    min-height: 300px;

    h1 {
      font-size: 40px;
      right: 3%;
      top: 20%;
    }
  }

  @media ${medias.xsmall} {
    min-height: 250px;
    h1 {
      font-size: 30px;
      right: 2%;
      top: 25%;
    }
  }

  @media ${medias.xxsmall} {
    min-height: 200px;
    h1 {
      font-size: 24px;
      right: 1%;
      top: 30%;
    }
  }
`;

export const Container = styled.section`
  width: 100%;
  background:
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url('${Background}') center/cover;
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
