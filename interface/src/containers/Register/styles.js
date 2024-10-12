import styled from 'styled-components';

import { Link as ReactLink } from 'react-router-dom';

import BackgroudLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

const medias = {
  large: '(max-width: 1200px)',
  medium: '(max-width: 992px)',
  small: '(max-width: 768px)',
  xsmall: '(max-width: 576px)',
  xxsmall: '(max-width: 400px)',
};

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  @media ${medias.medium} {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftContainer = styled.div`
  background: url('${BackgroudLogin}') center/cover;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50%;
  }

  @media ${medias.large} {
    img {
      width: 80%;
    }
  }

  @media ${medias.medium} {
    max-width: 100%;
    height: 40vh;

    img {
      width: 60%;
    }
  }

  @media ${medias.small} {
    img {
      width: 50%;
    }
  }

  @media ${medias.xxsmall} {
    img {
      padding: 10px 0;
      width: 50%;
    }
  }
`;

export const RightContainer = styled.div`
  background: url('${Background}');
  background-size: cover;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;

    a {
      text-decoration: underline;
    }
  }

  @media ${medias.large} {
    p {
      font-size: 16px;
    }
  }

  @media ${medias.medium} {
    max-width: 100%;
    height: 60vh;
  }

  @media ${medias.small} {
    padding: 20px;
  }

  @media ${medias.xsmall} {
    height: 50%;
    p {
      font-size: 16px;
    }
  }

  @media ${medias.xxsmall} {
    height: 50%;
    p {
      font-size: 16px;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Road Rage', sans-serif;
  font-size: 40px;
  color: #9758a6;

  @media ${medias.large} {
    font-size: 35px;
  }

  @media ${medias.small} {
    font-size: 32px;
  }

  @media ${medias.xxsmall} {
    font-size: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

  @media ${medias.xsmall} {
    max-width: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    min-height: 52px;
    border-radius: 5px;
    padding: 0 16px;
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }

  p {
    font-size: 14px;
    color: #cf3057;
    font-weight: 600;
    text-align: center;
    max-height: auto;
    overflow: hidden;
  }

  @media ${medias.small} {
    label {
      font-size: 16px;
      max-height: auto;
      overflow: hidden;
    }

    input {
      max-height: auto;
      overflow: hidden;
    }
  }

  @media ${medias.xxsmall} {
    label {
      font-size: 14px;
    }

    input {
      height: 44px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const Link = styled(ReactLink)`
  color: #fff;

  @media ${medias.small} {
    font-size: 14px;
  }

  @media ${medias.xxsmall} {
    font-size: 12px;
  }
`;
